"use client";
import { Button } from "@/app/(components)/button";
import style from "../../../(styles)/form.module.scss";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { orderData } from "@/app/(interfaces)/order";
import { filterAvailableDrivers } from "@/utils/filterdrivers";
import { driver } from "@/app/(interfaces)/driver";
import { getRecordFromDb } from "@/utils/getData";
const Page = () => {
  const router = useRouter();
  const params = useParams();
  const [orderPayload, setorderPayload] = useState<orderData>({});
  const [selectedDriver, setSelectedDriver] = useState<driver>({});
  const { data } = useQuery({
    queryKey: [`orders`],
    queryFn: async () =>
      await getRecordFromDb(
        `${process.env.NEXT_PUBLIC_API_URL!}/orders/${Number(params?.id)}`
      ),
  });
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (driver: orderData) =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL!}/orders/${Number(params?.id)}`, {
        method: "PATCH",
        body: JSON.stringify(driver),
      }).then((res) => res.json()),
  });
  useEffect(() => {
    if (data) {
      setorderPayload(data);
    }
  }, [data]);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      customer_name: orderPayload.customer_name,
      assigned_truck: orderPayload.assigned_truck,
      assigned_driver: selectedDriver.name,
      order_status: orderPayload.order_status,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setorderPayload((prevState: orderData) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleDriverSelect = (value: driver) => {
    setSelectedDriver(value);
  };
  const handleStatusSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setorderPayload((prevState: orderData) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const { data: drivers } = useQuery({
    queryKey: ["drivers"],
    queryFn: async () => await getRecordFromDb(`${process.env.NEXT_PUBLIC_API_URL!}/drivers`),
  });
  const { data: orders } = useQuery({
    queryKey: ["trucks"],
    queryFn: async () => await getRecordFromDb(`${process.env.NEXT_PUBLIC_API_URL!}/orders`),
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
            <legend>Update order info</legend>
            <label htmlFor="customer_name">Customer name</label>
            <input
              type="text"
              name="customer_name"
              id="customer_name"
              value={orderPayload?.customer_name || ""}
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
              <option value={orderPayload?.assigned_driver}>
                {orderPayload?.assigned_driver}
              </option>
              {availableDrivers?.map((driver) => (
                <option key={driver?.id} value={driver?.id}>
                  {driver?.name}
                </option>
              ))}
            </select>
            <label htmlFor="order_status">Order status</label>
            <select name="order_status" onChange={handleStatusSelect}>
              <option value="">Select status</option>
              <option value="In progress">In Progress</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
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
