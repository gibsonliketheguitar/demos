import DataGrid from "react-data-grid";
import type { NextPage } from "next";

import Button from "@/core/Button/_Button";
import useGlobalTableState from "@/hooks/useGlobalTableState";
import { default as Layout } from "@/layout/Home";
import useGlobalModalState from "@/hooks/useGlobalModalState";

const Home: NextPage = () => {
  const { tableState } = useGlobalTableState();
  const { isOpen, setOpen } = useGlobalModalState();

  return (
    <Layout>
      <DataGrid
        //onColumnResize={(index, width) => (colWidthRef.current = { targetIndx: index, width })}
        columns={tableState?.columns}
        rows={tableState?.rows}
        defaultColumnOptions={{
          resizable: true,
        }}
      />
      {!isOpen && <Button title="Hello" onClick={() => setOpen(true)} />}
      {isOpen && <Button title="Hello" onClick={() => setOpen(false)} />}
    </Layout>
  );
};

export default Home;
