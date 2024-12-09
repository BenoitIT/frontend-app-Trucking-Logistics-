"use client";
import { Button } from "@/app/(components)/button";
import style from "../../../(styles)/form.module.scss";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { orderData } from "@/app/(interfaces)/order";
import { filterAvailableDrivers } from "@/utils/filterdrivers";
import { driver } from "@/app/(interfaces)/driver";
import { getRecordFromDb } from "@/utils/getData";
const Page = () => {
  const router = useRouter();
  const [driverPayload, setDriverPayload] = useState<orderData>({});
  const [selectedDriver, setSelectedDriver] = useState<driver>({});
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (newdriver: orderData) =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL!}/orders`, {
        method: "POST",
        body: JSON.stringify(newdriver),
      }).then((res) => res.json()),
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      id: Math.floor(Math.random() * 1000),
      date: new Date().toDateString(),
      customer_name: driverPayload.customer_name,
      assigned_truck: selectedDriver.assigned_truck,
      assigned_driver: selectedDriver.name,
      order_status: "Pending",
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDriverPayload((prevState: orderData) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleDriverSelect = (value: driver) => {
    setSelectedDriver(value);
  };
  const { data: drivers } = useQuery({
    queryKey: ["drivers"],
    queryFn: async () => await getRecordFromDb(`${process.env.NEXT_PUBLIC_API_URL!}/drivers`),

  });
  const { data: orders } = useQuery({
    queryKey: ["trucks"],
    queryFn: async () => await getRecordFromDb(`${process.env.NEXT_PUBLIC_API_URL!}/orders`)
  });
  const availableDrivers = filterAvailableDrivers(drivers, orders);
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
            <legend>Add new order</legend>
            <label htmlFor="customer_name">Customer name</label>
            <input
              type="text"
              name="customer_name"
              id="customer_name"
              onChange={handleChange}
              placeholder="cutomer name..."
            />
            <label htmlFor="assignedtruck">Assign driver</label>
            <select
              onChange={(e) => {
                const selectedDriverId = parseInt(e.target.value, 10);
                const selected = availableDrivers.find(
                  (driver) => driver.id === selectedDriverId
                );
                if (selected) {
                  handleDriverSelect(selected);
                }
              }}
            >
              <option value="">Select a driver</option>
              {availableDrivers?.map((driver) => (
                <option key={driver.id} value={driver.id}>
                  {driver.name}
                </option>
              ))}
            </select>

            <input type="submit" name="submit" id="submit" value={isPending?"Loading..":"Register"} />
          </fieldset>
        </form>
      </div>
    </>
  );
};
export default Page;
