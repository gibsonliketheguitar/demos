import React from "react";

export default function HeaderColumn({ column }: any) {
  return (
    <th
      className="font-bold border-b-3 border-red-300 bg-blue-500"
      {...column.getHeaderProps()}
    >
      {column.render("Header")}
    </th>
  );
}
