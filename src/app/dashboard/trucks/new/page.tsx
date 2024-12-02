"use client";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/app/(components)/button";
import style from "../../../(styles)/form.module.scss";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { truckData } from "@/app/(interfaces)/truck";
const Page = () => {
  const router = useRouter();
  const [truckPayload, setTruckPayload] = useState<truckData>({});
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (newtruck: truckData) =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL!}/trucks`, {
        method: "POST",
        body: JSON.stringify(newtruck),
      }).then((res) => res.json()),
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      id: Math.floor(Math.random() * 1000),
      plate_number: truckPayload.plate_number,
      status: "available",
      capacity: truckPayload.capacity,
    });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTruckPayload((prevState: truckData) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    if (isSuccess) {
      router.back();
    }
  }, [isSuccess]);
  return (
    <>
      <div className={style.back}>
        <Button label="Go back" OnClick={() => router.back()} />
      </div>
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <fieldset className={style.contact}>
            <legend>Add new truck</legend>
            <label htmlFor="plate_number">Plate number</label>
            <input
              type="text"
              name="plate_number"
              id="plate_number"
              placeholder="driver name..."
              onChange={handleChange}
            />
            <label htmlFor="capacity">Capacity</label>
            <input
              type="capacity"
              name="capacity"
              id="capacity"
              placeholder="driver phone number...."
              onChange={handleChange}
            />
            <input
              type="submit"
              name="submit"
              id="submit"
              value={isPending ? "Loading.." : "Register"}
            />
          </fieldset>
        </form>
      </div>
    </>
  );
};
export default Page;
