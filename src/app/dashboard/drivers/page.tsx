"use client";
import { AdminPanelHeaderContext } from "@/app/(context)/dashboardTitleheaders";
import { useContext, useEffect } from "react";

const Page = () => {
  const { setTitle } = useContext<any>(AdminPanelHeaderContext);
  useEffect(() => {
    setTitle("Drivers");
  }, []);
  return <div>drivers...</div>;
};
export default Page;
