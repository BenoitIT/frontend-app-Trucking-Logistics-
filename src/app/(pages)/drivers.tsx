"use client";
import { AdminPanelHeaderContext } from "@/app/(context)/dashboardTitleheaders";
import { useContext, useEffect } from "react";
import { TabularPageView } from "../(components)/Hocs/tablePageView";

const Drivers = () => {
  const { setTitle } = useContext<any>(AdminPanelHeaderContext);
  useEffect(() => {
    setTitle("Drivers");
  }, []);
  return <></>;
};
export default TabularPageView(Drivers);
