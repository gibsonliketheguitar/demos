import React from "react";
import Cell from "./Cell";
import equal from "fast-deep-equal";

function Row({ row }: any) {
  return (
    <tr {...row.getRowProps()}>
      {row.cells.map((cell: any, index: any) => {
        return <Cell key={index} cell={cell} />;
      })}
    </tr>
  );
}

export default React.memo(Row, (prevProps, nextProps) => {
  //console.log(equal(prevProps.row.original, nextProps.row.original))
  return equal(prevProps.row.original, nextProps.row.original) ? false : true;
});
