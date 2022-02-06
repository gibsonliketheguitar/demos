import React from "react";
import Cell from "./Cell";

function Row({ row }: any) {
  return (
    <tr {...row.getRowProps()}>
      {row.cells.map((cell: any, index: any) => {
        return <Cell key={index} cell={cell} />;
      })}
    </tr>
  );
}

export default React.memo(Row);
