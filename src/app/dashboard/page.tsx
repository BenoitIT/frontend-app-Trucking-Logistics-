"use client";
import Card from "../(components)/Card";
import styles from "../(styles)/dashboard.module.scss";
import { useEffect, useContext } from "react";
import { AdminPanelHeaderContext } from "../(context)/dashboardTitleheaders";
import OrdersDistribution from "../(components)/ordersChart";
import { data } from "../(dummydata)/orderchat";
import { cardData } from "../(dummydata)/dashboardCard";
import Table from "../(components)/table";
import { recentOdersHeaders } from "../(components)/tableheaders/recentOrders";
import { recentOrders } from "../(dummydata)/recentOrder";

export default function Dashboard() {
  const { setTitle } = useContext<any>(AdminPanelHeaderContext);
  useEffect(() => {
    setTitle("Home");
  }, []);
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
          <Table headers={recentOdersHeaders} data={recentOrders} />
        </div>
      </div>
    </>
  );
}
