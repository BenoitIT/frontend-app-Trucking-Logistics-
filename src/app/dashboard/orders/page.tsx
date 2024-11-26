"use client"
import { useEffect,useContext } from "react";
import { AdminPanelHeaderContext } from "@/app/(context)/dashboardTitleheaders";
const Page = () => {
  const { setTitle } = useContext<any>(AdminPanelHeaderContext);
  useEffect(() => {
    setTitle("Orders");
  }, []);
  return <div>orders..</div>;
};
export default Page;
