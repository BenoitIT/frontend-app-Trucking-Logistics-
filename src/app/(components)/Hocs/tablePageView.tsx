import Table from "../table";
import { TabularPageProps } from "@/app/(interfaces)/tabularPages";
import style from "../../(styles)/tabularPageView.module.scss";
import { Button } from "../button";
import { Search } from "../searchbox";
import { Filters } from "../radioBoxFilter";
export const TabularPageView = (Component: React.FC) => {
  const ModifiedComponent = (props: TabularPageProps) => {
    const { dataSourceEndpoint, headers, action, showTimerRangeFilters } =
      props;
    return (
      <div className={style.container}>
        <Component />
        <div className={style.activities}>
          <Search />
          <div className={style.rightActions}>
            <div className={showTimerRangeFilters ? "" : style.hide}>
              <Filters />
            </div>
            <Button label="Add New" />
          </div>
        </div>
        <Table headers={headers} data={[]} action={action} />
      </div>
    );
  };
  return ModifiedComponent;
};
