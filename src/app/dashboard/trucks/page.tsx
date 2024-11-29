"use client";

import { trucksTableHeaders } from "@/app/(components)/tableheaders/headers";
import Trucks from "@/app/(pages)/trucks";
import { useMutation } from "@tanstack/react-query";
import { deleteData } from "@/utils/deleteData";
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
    const url = `${process.env.NEXT_PUBLIC_API_URL!}/trucks/${id}`; //
    mutate(url, {
      onSuccess: () => {
        alert("truck is deleted successfully.");
      },
      onError: (error) => {
        alert("Error deleting truck");
      },
    });
  };

  const TrucksPageAction = [
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
    <Trucks
      dataSourceEndpoint={`${process.env.NEXT_PUBLIC_API_URL!}/trucks`}
      dataFetchingQueryKey="trucks"
      headers={trucksTableHeaders}
      action={TrucksPageAction}
      addnewroute="new"
    />
  );
};
export default Page;
