import type { NextPage } from "next";
import React, { useCallback, useState } from "react";

import Button from "@/core/Button/_Button";
import { default as Layout } from "@/layout/Home";
import Table from "src/components/Table/_Table";
import {
  updateTableColumnsAtom,
  updateTableDataAtom,
} from "@/store/TableState/helper";

const Home: NextPage = () => {
  const { updateTableColumns } = updateTableColumnsAtom();
  const { updateTableData } = updateTableDataAtom();

  function AddColumn() {
    updateTableColumns((prev) => {
      const len = prev.length + 1;
      const newCol = {
        Header: `Column ${len}`,
        accessor: `col${len}`, // accessor is the "key" in the data
      };
      return [...prev, newCol];
    });
  }

  const AddRow = () => {
    updateTableData((prev: any) => {
      return [...prev, {}];
    });
  };

  const handleAddColumn = useCallback(() => AddColumn(), [updateTableColumns]);
  const handleAddRow = useCallback(() => AddRow(), [updateTableColumns]);

  return (
    <Layout>
      <Table />
      <Button title="Add Column" onClick={handleAddColumn} />
      <Button title="Add Row" onClick={handleAddRow} />
    </Layout>
  );
};

export default Home;
