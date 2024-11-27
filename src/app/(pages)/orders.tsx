"use client";
import { useEffect, useContext } from "react";
import { AdminPanelHeaderContext } from "@/app/(context)/dashboardTitleheaders";
import { TabularPageView } from "@/app/(components)/Hocs/tablePageView";
const Orders = () => {
  const { setTitle } = useContext<any>(AdminPanelHeaderContext);
  useEffect(() => {
    setTitle("Orders");
  }, []);
  return <></>;
};
export default TabularPageView(Orders);
