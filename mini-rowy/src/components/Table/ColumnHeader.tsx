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

export default React.memo(ColumnHeader, (prevProps, nextProps) => {
  //console.log("prevProps", prevProps.column.Header);
  //console.log("nextProps", nextProps.column.Header);
  //console.log(prevProps.column.Header !== nextProps.column.Header);
  return prevProps.column.Header !== nextProps.column.Header;
});

/**
 *  8:30 - 12: 30
 *  2:30 - 6:30
 */
