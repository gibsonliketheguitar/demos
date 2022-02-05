import type { NextPage } from "next";

import Button from "@/core/Button/_Button";
import { default as Layout } from "@/layout/Home";
import Table from "src/components/Table/_Table";
import React from "react";
import {
  readTableColumnsAtom,
  readTableDataAtom,
  updateTableColumnsAtom,
  updateTableDataAtom,
} from "@/store/TableState/helper";

const Home: NextPage = () => {
  const { tableColumns } = readTableColumnsAtom();
  const { tableData } = readTableDataAtom();
  const { updateTableColumns } = updateTableColumnsAtom();
  const { updateTableData } = updateTableDataAtom();

  const handleAddColumn = () => {
    updateTableColumns((prev) => {
      const len = prev.length + 1;
      const newCol = {
        Header: `Column ${len}`,
        accessor: `col${len}`, // accessor is the "key" in the data
      };
      return [...prev, newCol];
    });
  };

  const handleAddRow = () => {
    updateTableData((prev: any) => {
      return [{}, ...prev];
    });
  };

  return (
    <Layout>
      <Table columns={tableColumns} data={tableData} />
      <Button title="Add Column" onClick={handleAddColumn} />
      <Button title="Add Row" onClick={handleAddRow} />
    </Layout>
  );
};

export default Home;
