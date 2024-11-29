"use client";
import Card from "../(components)/Card";
import styles from "../(styles)/dashboard.module.scss";
import { useEffect, useContext } from "react";
import { AdminPanelHeaderContext } from "../(context)/dashboardTitleheaders";
import OrdersDistribution from "../(components)/ordersChart";
import { data } from "../(dummydata)/orderchat";
import Table from "../(components)/table";
import { recentOdersHeaders } from "../(components)/tableheaders/recentOrders";
import { useQuery } from "@tanstack/react-query";
import { getRecordFromDb } from "@/utils/getData";

export default function Dashboard() {
  const { setTitle } = useContext<any>(AdminPanelHeaderContext);
  useEffect(() => {
    setTitle("Home");
  }, []);
  const { data: drivers } = useQuery({
    queryKey: ["drivers"],
    queryFn: async () =>
      await getRecordFromDb(`${process.env.NEXT_PUBLIC_API_URL!}/drivers`),
  });
  const { data: trucks } = useQuery({
    queryKey: ["trucks"],
    queryFn: async () =>
      await getRecordFromDb(`${process.env.NEXT_PUBLIC_API_URL!}/trucks`),
  });
  const { data: orders } = useQuery({
    queryKey: [`orders`],
    queryFn: async () =>
      await getRecordFromDb(`${process.env.NEXT_PUBLIC_API_URL!}/orders`),
  });
  const cardData = [
    {
      title: "Trucks",
      value: trucks?.length || "",
    },
    {
      title: "Drivers",
      value: drivers?.length || "",
    },
    {
      title: "Total orders",
      value: orders?.length || "",
    },
    {
      title: "Monthly orders",
      value: orders?.length || "",
    },
  ];
  return (
    <>
      <div className={styles.dashboard}>
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div className={styles.stastics}>
        <div className={styles.chart}>
          <p>Order Distribution by Month - 2024</p>
          <OrdersDistribution data={data} />
        </div>
        <div className={styles.recentOrders}>
          <p>Most recent orders</p>
          <Table headers={recentOdersHeaders} data={orders?.slice(0,4)} />
        </div>
      </div>
    </>
  );
}
