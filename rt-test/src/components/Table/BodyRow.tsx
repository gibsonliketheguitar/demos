import Cell from "./Cell";

export default function BodyRow({ row }: any) {
  return (
    <tr {...row.getRowProps()}>
      {row.cells.map((cell: any, index: any) => {
        return <Cell key={index} cell={cell} />;
      })}
    </tr>
  );
}
