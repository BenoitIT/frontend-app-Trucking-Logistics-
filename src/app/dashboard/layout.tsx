"use client";
import Sidebar from "../(components)/sidebar";
import Header from "../(components)/dashboardHeader";
import styles from "../(styles)/home.module.scss";
import { AdminPanelHeaderContext } from "../(context)/dashboardTitleheaders";
import { useState } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [title, setTitle] = useState("Home");
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <AdminPanelHeaderContext.Provider value={{ title: title, setTitle }}>
          <Header />
          <div>{children}</div>
        </AdminPanelHeaderContext.Provider>
      </div>
    </div>
  );
}
