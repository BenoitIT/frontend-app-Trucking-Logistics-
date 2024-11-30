"use client";

import { driversTableHeaders } from "@/app/(components)/tableheaders/drivers";
import Drivers from "@/app/(pages)/drivers";
import { deleteData } from "@/utils/deleteData";
import { useMutation } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Page = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const searchParams: any = useSearchParams();
  const searchValue = searchParams?.get("search");
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
    const url = `${process.env.NEXT_PUBLIC_API_URL!}/drivers/${id}`; //
    mutate(url, {
      onSuccess: () => {
        alert("driver is deleted successfully.");
      },
      onError: (error) => {
        alert("Error deleting driver");
      },
    });
  };
  const drivePageAction = [
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
    <Drivers
      dataSourceEndpoint={`${process.env.NEXT_PUBLIC_API_URL!}/drivers?name=${searchValue||""}`}
      dataFetchingQueryKey="drivers"
      headers={driversTableHeaders}
      action={drivePageAction}
      addnewroute="new"
    />
  );
};
export default Page;
