"use client";
import { Button } from "@/app/(components)/button";
import style from "../../../(styles)/form.module.scss";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { driver } from "@/app/(interfaces)/driver";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getUnassignedTrucks } from "@/utils/filterTracks";
import { getRecordFromDb } from "@/utils/getData";
const Page = () => {
  const router = useRouter();
  const [driverPayload, setDriverPayload] = useState<driver>({});
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (newdriver: driver) =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL!}/drivers`, {
        method: "POST",
        body: JSON.stringify(newdriver),
      }).then((res) => res.json()),
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      id: Math.floor(Math.random() * 1000),
      name: driverPayload.name,
      license_number: driverPayload.license_number,
      assigned_truck: driverPayload.assigned_truck,
      contact_number: driverPayload.contact_number,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDriverPayload((prevState: driver) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleTruckSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setDriverPayload((prevState: driver) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const { data: drivers } = useQuery({
    queryKey: ["drivers"],
    queryFn: async () => await getRecordFromDb(`${process.env.NEXT_PUBLIC_API_URL!}/drivers`),
  });
  const { data: trucks } = useQuery({
    queryKey: ["trucks"],
    queryFn: async () => await getRecordFromDb(`${process.env.NEXT_PUBLIC_API_URL!}/trucks`),
  });
  const unassignedTrucks = getUnassignedTrucks(trucks, drivers);
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
            <legend>Add new driver</legend>
            <label htmlFor="name">Driver name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="driver name..."
              onChange={handleChange}
            />
            <label htmlFor="license_number">Licence number</label>
            <input
              type="text"
              name="license_number"
              id="license_number"
              placeholder="driver licence number..."
              onChange={handleChange}
            />
            <label htmlFor="contact_number">Phone number</label>
            <input
              type="phone"
              name="contact_number"
              id="contact_number"
              placeholder="driver phone number...."
              onChange={handleChange}
            />
            <label htmlFor="assigned_truck">Assigned truck</label>
            <select name="assigned_truck" onChange={handleTruckSelect}>
              {unassignedTrucks?.map((truck) => (
                <option key={truck.id} value={truck.plate_number}>
                  {truck.plate_number} - {truck.status}
                </option>
              ))}
            </select>
            <input
              type="submit"
              name="submit"
              id="submit"
              value={!isPending ? "Register" : "Loading.."}
            />
          </fieldset>
        </form>
      </div>
    </>
  );
};
export default Page;
