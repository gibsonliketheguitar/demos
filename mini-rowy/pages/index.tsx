import type { NextPage } from "next";

import React, { useState } from "react";
import Button from "@/core/Button/_Button";
import { default as Layout } from "@/layout/Home";
import Table from "src/components/Table/_Table";
import {
  readTableColumnsAtom,
  readTableDataAtom,
  updateTableColumnsAtom,
  updateTableDataAtom,
} from "@/store/TableState/helper";
import RenderCheck from "src/components/RenderCheck";
import { setUncaughtExceptionCaptureCallback } from "process";
import NoMemo from "src/components/RenderCheck/NoMemo";

const Home: NextPage = () => {
  const [text, setText] = useState("");
  const { tableData } = readTableDataAtom();
  const { tableColumns } = readTableColumnsAtom();
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
      return [...prev, {}];
    });
  };

  return (
    <Layout>
      <input value={text} onChange={(e: any) => setText(e?.target?.value)} />
      <Table columns={tableColumns} data={tableData} />
      <Button title="Add Column" onClick={handleAddColumn} />
      <Button title="Add Row" onClick={handleAddRow} />
      <RenderCheck />
      <NoMemo />
    </Layout>
  );
};

export default Home;
