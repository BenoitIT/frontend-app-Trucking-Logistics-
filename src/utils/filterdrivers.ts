import { driver } from "@/app/(interfaces)/driver";
import { orderData } from "@/app/(interfaces)/order";

export const filterAvailableDrivers = (
  drivers: driver[],
  orders: orderData[]
) => {
  const driversWithActiveOrders = orders
    ?.filter(
      (order: orderData) =>
        order.order_status &&
        ["Pending", "In Progress"]?.includes(order.order_status)
    )
    ?.map((order) => order.assigned_driver);
  return drivers?.filter(
    (driver: driver) =>
      driver?.id && !driversWithActiveOrders?.includes(driver?.id.toString())
  );
};
