"use client";
import Sidebar from "../(components)/sidebar";
import Header from "../(components)/dashboardHeader";
import styles from "../(styles)/home.module.scss";
import { AdminPanelHeaderContext } from "../(context)/dashboardTitleheaders";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = useSession();
  const router = useRouter();
  const [title, setTitle] = useState("Home");
  const [showSidebar, setShowSideBar] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => {
      if (!session.data?.user) {
        router.push("/");
      }
    }, 2000);
    return () => clearTimeout(id);
  }, [session, router]);
  if (!session.data?.user) {
    return null;
  }
  return (
    <div className={styles.container}>
      <AdminPanelHeaderContext.Provider
        value={{
          title: title,
          setTitle,
          showSidebar: showSidebar,
          setShowSideBar,
        }}
      >
        <Sidebar />
        <div className={styles.content}>
          <Header />
          <div>{children}</div>
        </div>
      </AdminPanelHeaderContext.Provider>
    </div>
  );
}
