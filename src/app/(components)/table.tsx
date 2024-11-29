"use client";
import { TableProps } from "../(interfaces)/table";
import style from "../(styles)/table.module.scss";
const DynamicTable = <T extends Record<string, string | number>>({
  headers,
  data,
  action,
}: TableProps<T>) => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>#</th>
          {headers.map((header, index) => (
            <th key={index} className={``}>
              {header.header}
            </th>
          ))}
          {action ? <th>Action</th> : ""}
        </tr>
      </thead>
      <tbody>
        {data?.length > 0 ? (
          data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{rowIndex + 1}</td>
              {headers.map((header, colIndex) => (
                <td key={colIndex}>{row[header.field] as string | number??"-"}</td>
              ))}
              <td
                className={
                  action?.length && action?.length > 0 ? "" : style.hide
                }
              >
                <div className={style.actions}>
                  {action
                    ? action.map((action, index) => (
                        <span
                          key={index}
                          title={action?.name}
                          onClick={() => action.Click(row.id as number)}
                        >
                          {action.icon}
                        </span>
                      ))
                    : ""}
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={Array.from(Object.keys(headers)).length+1}>
              <div>no record found</div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default DynamicTable;
