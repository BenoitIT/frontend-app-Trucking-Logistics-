"use client"
import { useEffect,useContext } from "react";
import { AdminPanelHeaderContext } from "@/app/(context)/dashboardTitleheaders";
const Page = () => {
  const { setTitle } = useContext<any>(AdminPanelHeaderContext);
  useEffect(() => {
    setTitle("Trucks");
  }, []);
  return <div>trucks..</div>;
};
export default Page;
