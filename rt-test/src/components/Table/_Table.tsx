import {
  readTableColumnsAtom,
  readTableDataAtom,
} from "@/store/TableState/helper";
import React from "react";
import { useTable } from "react-table";

import Header from "./Header";
import { default as Body } from "./Body";

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
      <Header headerGroups={headerGroups} />
      <Body
        getTableBodyProps={getTableBodyProps}
        prepareRow={prepareRow}
        rows={rows}
      />
    </table>
  );
}
