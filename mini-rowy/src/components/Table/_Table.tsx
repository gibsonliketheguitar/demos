import React from "react";
import {
  readTableColumnsAtom,
  readTableDataAtom,
} from "@/store/TableState/helper";
import { useTable } from "react-table";
import ColumnHeader from "./ColumnHeader";
import Row from "./Row";

function Table() {
  const renders = React.useRef(0);
  const { tableData } = readTableDataAtom();
  const { tableColumns } = readTableColumnsAtom();
  // @ts-ignore: Unreachable code error
  const tableInstance = useTable({ columns: tableColumns, data: tableData });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  //https://stackoverflow.com/questions/64707499/reducing-react-table-rerendering
  return (
    <>
      <div>render: {renders.current++} </div>
      <table
        className="border-solid border-2 border-blue-500"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => {
                return (
                  <ColumnHeader
                    key={`${column.Header}${index}`}
                    column={column}
                  />
                );
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
    </>
  );
}

export default React.memo(Table);
