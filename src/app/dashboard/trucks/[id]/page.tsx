"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "@/app/(components)/button";
import style from "../../../(styles)/form.module.scss";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { truckData } from "@/app/(interfaces)/truck";
import { getRecordFromDb } from "@/utils/getData";
const Page = () => {
  const router = useRouter();
  const params = useParams();
  const [truckPayload, setTruckPayload] = useState<truckData>({});
  const { data } = useQuery({
    queryKey: [`orders`],
    queryFn: async () =>
      await getRecordFromDb(
        `${process.env.NEXT_PUBLIC_API_URL!}/trucks/${Number(params?.id)}`
      ),
  });
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (truck: truckData) =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL!}/trucks/${Number(params?.id)}`, {
        method: "PATCH",
        body: JSON.stringify(truck),
      }).then((res) => res.json()),
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      plate_number: truckPayload.plate_number,
      status: truckPayload.status,
      capacity: truckPayload.capacity,
    });
  };
  const handleStatusSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setTruckPayload((prevState: truckData) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTruckPayload((prevState: truckData) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    if (data) {
      setTruckPayload(data);
    }
  }, [data]);
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
            <legend>Update truck</legend>
            <label htmlFor="plate_number">Plate number</label>
            <input
              type="text"
              name="plate_number"
              id="plate_number"
              value={truckPayload?.plate_number || ""}
              placeholder="driver name..."
              onChange={handleChange}
            />
            <label htmlFor="capacity">Capacity</label>
            <input
              type="capacity"
              name="capacity"
              id="capacity"
              value={truckPayload?.capacity || ""}
              placeholder="driver phone number...."
              onChange={handleChange}
            />
            <label htmlFor="status">Order status</label>
            <select name="status" onChange={handleStatusSelect}>
              <option value={truckPayload?.status}>
                {truckPayload?.status}
              </option>
              <option value="Delivering">Delivering</option>
              <option value="Available">Available</option>
            </select>
            <input
              type="submit"
              name="submit"
              id="submit"
              value={isPending ? "Loading.." : "Update"}
            />
          </fieldset>
        </form>
      </div>
    </>
  );
};
export default Page;
