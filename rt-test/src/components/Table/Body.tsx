import React from "react";
import Row from "./BodyRow";

export default function TableBody({
  getTableBodyProps,
  prepareRow,
  rows,
}: any) {
  return (
    <tbody {...getTableBodyProps()}>
      {rows.map((row: any, index: any) => {
        prepareRow(row);
        return <Row key={index} row={row} />;
      })}
    </tbody>
  );
}
