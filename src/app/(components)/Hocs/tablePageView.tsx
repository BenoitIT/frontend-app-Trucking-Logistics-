"use client";
import Table from "../table";
import { TabularPageProps } from "@/app/(interfaces)/tabularPages";
import style from "../../(styles)/tabularPageView.module.scss";
import { Button } from "../button";
import { Search } from "../searchbox";
import { Filters } from "../radioBoxFilter";
import { useRouter, usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getRecordFromDb } from "@/utils/getData";
import ErrorSection from "../errorSection";
export const TabularPageView = (Component: React.FC) => {
  const ModifiedComponent = (props: TabularPageProps) => {
    const router = useRouter();
    const currentPath = usePathname();
    const {
      dataSourceEndpoint,
      headers,
      action,
      showTimerRangeFilters,
      addnewroute,
      dataFetchingQueryKey,
    } = props;
    const { data, isLoading} = useQuery({
      queryKey: [dataFetchingQueryKey],
      queryFn: async () => await getRecordFromDb(dataSourceEndpoint),
    });
    if (data) {
      return (
        <div className={style.container}>
          <Component />
          <div className={style.activities}>
            <Search />
            <div className={style.rightActions}>
              <div className={showTimerRangeFilters ? "" : style.hide}>
                <Filters />
              </div>
              <Button
                label="Add New"
                OnClick={() => router.push(`${currentPath}/${addnewroute}`)}
              />
            </div>
          </div>
          {Array.isArray(data) && (
            <Table headers={headers} data={data} action={action} />
          )}
        </div>
      );
    } else if (isLoading) {
      return <div className={style.loading}>Loading records....</div>;
    } else {
      return <ErrorSection />;
    }
  };
  return ModifiedComponent;
};
