"use server";

import { trucksTableHeaders } from "@/app/(components)/tableheaders/headers";
import Trucks from "@/app/(pages)/trucks";

const Page = () => {
  return <Trucks dataSourceEndpoint="api url" headers={trucksTableHeaders} />;
};
export default Page;
