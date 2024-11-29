"use client";

import { ordersTableHeaders } from "@/app/(components)/tableheaders/orders";
import Orders from "@/app/(pages)/orders";
import { deleteData } from "@/utils/deleteData";
import { useMutation } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";

const Page = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const { mutate } = useMutation({
    mutationFn: deleteData,
    onSuccess: () => {
      window.location.reload();
    },
  });
  const handleEdit = async (id: number) => {
    router.push(`${currentPath}/${id}`);
  };
  const handleDelete = async (id: number) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL!}/orders/${id}`; //
    mutate(url, {
      onSuccess: () => {
        alert("order is deleted successfully.");
      },
      onError: (error) => {
        alert("Error deleting order");
      },
    });
  };
  const OrdersPageAction = [
    {
      name: "edit",
      icon: "🖊️",
      Click: handleEdit,
    },
    {
      name: "delete",
      icon: "❌",
      Click: handleDelete,
    },
  ];
  return (
    <Orders
      dataSourceEndpoint={`${process.env.NEXT_PUBLIC_API_URL!}/orders`}
      dataFetchingQueryKey="orders"
      headers={ordersTableHeaders}
      showTimerRangeFilters={true}
      action={OrdersPageAction}
      addnewroute="new"
    />
  );
};
export default Page;
