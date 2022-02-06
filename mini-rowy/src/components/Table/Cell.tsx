import React from "react";

function Cell({ cell }: any) {
  return (
    <td
      className="p-2.5 border-solid border-2 border-sky-200 bg-white"
      {...cell.getCellProps()}
    >
      {cell.render("Cell")}
    </td>
  );
}

export default React.memo(Cell);
