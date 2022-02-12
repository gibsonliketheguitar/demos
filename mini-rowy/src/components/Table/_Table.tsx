import {
  readTableColumnsAtom,
  readTableDataAtom,
} from "@/store/TableState/helper";
import React from "react";
import { useTable } from "react-table";

import ColumnHeader from "./ColumnHeader";
import Row from "./Row";

export default function Table() {
  const { tableColumns } = readTableColumnsAtom();
  const { tableData } = readTableDataAtom();
  // @ts-ignore: Unreachable code error
  const tableInstance = useTable({ columns: tableColumns, data: tableData });

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
              return <ColumnHeader key={index} column={column} />;
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
