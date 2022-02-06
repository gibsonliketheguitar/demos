import React from "react";

function ColumnHeader({ column }: any) {
  return (
    <th
      className="font-bold border-b-3 border-red-300 bg-blue-500"
      {...column.getHeaderProps()}
    >
      {column.render("Header")}
    </th>
  );
}

export default React.memo(ColumnHeader);
