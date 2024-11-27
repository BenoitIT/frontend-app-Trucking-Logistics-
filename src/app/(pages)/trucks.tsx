"use client";
import { useEffect, useContext } from "react";
import { AdminPanelHeaderContext } from "@/app/(context)/dashboardTitleheaders";
import { TabularPageView } from "../(components)/Hocs/tablePageView";
const Page = () => {
  const { setTitle } = useContext<any>(AdminPanelHeaderContext);
  useEffect(() => {
    setTitle("Trucks");
  }, []);
  return <></>;
};
export default TabularPageView(Page);
