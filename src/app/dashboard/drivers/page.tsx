"use server";

import { driversTableHeaders } from "@/app/(components)/tableheaders/drivers";
import Drivers from "@/app/(pages)/drivers";

const Page = () => {
  return <Drivers dataSourceEndpoint="api url" headers={driversTableHeaders} />;
};
export default Page;
