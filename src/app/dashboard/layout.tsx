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
  const [showSidebar,setShowSideBar]=useState(false);
  return (
    <div className={styles.container}>
      <AdminPanelHeaderContext.Provider value={{ title: title, setTitle,showSidebar:showSidebar,setShowSideBar }}>
        <Sidebar />
        <div className={styles.content}>
          <Header />
          <div>{children}</div>
        </div>
      </AdminPanelHeaderContext.Provider>
    </div>
  );
}
