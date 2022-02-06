import { useTable } from "react-table";
import ColumnHeader from "./ColumnHeader";
import Row from "./Row";

interface ITable {
  columns?: any;
  data?: any;
}
export default function Table({ columns, data }: ITable) {
  // @ts-ignore: Unreachable code error
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table
      className="border-solid border-2 border-blue-500"
      {...getTableProps()}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, index) => {
              const columnKey = `${column.Header}${index}`;
              return <ColumnHeader key={columnKey} column={column} />;
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return <Row key={index} row={row} />;
        })}
      </tbody>
    </table>
  );
}
