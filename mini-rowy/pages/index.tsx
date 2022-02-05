import type { NextPage } from "next";

import Button from "@/core/Button/_Button";
import { default as Layout } from "@/layout/Home";
import Table from "src/components/Table/_Table";
import React from "react";
import {
  readTableColumnsAtom,
  readTableDataAtom,
} from "@/store/TableState/helper";

const Home: NextPage = () => {
  const { tableColumns } = readTableColumnsAtom();
  const { tableData } = readTableDataAtom();

  return (
    <Layout>
      <Table columns={tableColumns} data={tableData} />
      <Button title="Add Column" />
      <Button title="Add Row" />
    </Layout>
  );
};

export default Home;
