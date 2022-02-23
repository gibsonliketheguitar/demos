import { default as Column } from "./HeaderColumn";

export default function Header({ headerGroups }: any) {
  return (
    <thead>
      {headerGroups?.map((headerGroup: any) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column: any, index: any) => {
            return <Column key={index} column={column} />;
          })}
        </tr>
      ))}
    </thead>
  );
}
