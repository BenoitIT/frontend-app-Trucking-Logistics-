"use server";

import { ordersTableHeaders } from "@/app/(components)/tableheaders/orders";
import Orders from "@/app/(pages)/orders";

const Page = () => {
  return (
    <Orders
      dataSourceEndpoint="api url"
      headers={ordersTableHeaders}
      showTimerRangeFilters={true}
      addnewroute="new"
    />
  );
};
export default Page;
