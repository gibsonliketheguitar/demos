import type { NextPage } from "next";

import Button from "@/core/Button/_Button";
import { default as Layout } from "@/layout/Home";
import Table from "src/components/Table/_Table";
import React from "react";
import {
  updateTableColumnsAtom,
  updateTableDataAtom,
} from "@/store/TableState/helper";
import RenderCheck from "src/components/RenderCheck";

const Home: NextPage = () => {
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
      <Table />
      <Button title="Add Column" onClick={handleAddColumn} />
      <Button title="Add Row" onClick={handleAddRow} />
      <RenderCheck />
    </Layout>
  );
};

export default Home;
