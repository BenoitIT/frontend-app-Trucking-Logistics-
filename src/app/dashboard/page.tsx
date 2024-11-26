"use client";
import Card from "../(components)/Card";
import styles from "../(styles)/dashboard.module.scss";
import { useEffect, useContext } from "react";
import { AdminPanelHeaderContext } from "../(context)/dashboardTitleheaders";
export default function Dashboard() {
  const data = [
    {
      title: "Trucks",
      value: "12",
      growth: "",
      details: ["perfectly operating"],
    },
    {
      title: "Drives",
      value: "23",
      growth: "",
      details: ["active drivers"],
    },
    {
      title: "Total orders",
      value: "12",
      growth: "",
      details: ["since the beginning"],
    },
    {
      title: "Monthly orders",
      value: "16",
      growth: "14%",
      details: ["processed this month"],
    },
  ];
  const { setTitle } = useContext<any>(AdminPanelHeaderContext);
  useEffect(() => {
    setTitle("Home");
  }, []);
  return (
    <div className={styles.dashboard}>
      {data.map((card, index) => (
        <Card key={index} {...card} />
      ))}
      <div className={styles.stastics}>
        <div>
          ok
        </div>
        <div>
          Hi
        </div>
      </div>
    </div>
  );
}
