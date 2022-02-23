export default function Cell({ cell }: any) {
  return (
    <td
      className="p-2.5 border-solid border-2 border-sky-500 bg-white"
      {...cell.getCellProps()}
    >
      {cell.render("Cell")}
    </td>
  );
}
