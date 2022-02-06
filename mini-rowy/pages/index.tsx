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
import { useUpdateAtom } from "jotai/utils";
import { tableColumnAtom, tableDataAtom } from "./_app";

const Home: NextPage = () => {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  const updateTableData = useUpdateAtom(tableDataAtom);
  const updateTableColumns = useUpdateAtom(tableColumnAtom);

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

  const passAnon = React.useCallback(() => setText(""), [setText]);
  const helloWolrd = () => console.log("hello world");
  const dataIssue = { haveData: false }; //on rerender, a new reference is created

  return (
    <Layout>
      <Table />
      <Button title="Add Column" onClick={handleAddColumn} />
      <Button title="Add Row" onClick={handleAddRow} />
      {/** This is testing purpose */}
      <input
        placeholder={text}
        value={text}
        onChange={(e: any) => setText(e?.target?.value)}
      />
      <input
        placeholder={text2}
        value={text2}
        onChange={(e: any) => setText2(e?.target?.value)}
      />
      <RenderCheck passAnon={helloWolrd} data={dataIssue} />
      <NoMemo />
    </Layout>
  );
};

export default Home;
