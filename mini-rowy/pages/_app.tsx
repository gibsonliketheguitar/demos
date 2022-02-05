import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "@/layout/App";
import { atom, Provider } from "jotai";
import React from "react";

const INIT_COL_HEADER = [
  {
    Header: "Column 1",
    accessor: "col1", // accessor is the "key" in the data
  },
  {
    Header: "Column 2",
    accessor: "col2",
  },
];

//Table Data aka Table Rows
const INIT_TABLE_DATA = [
  {
    col1: "Hello",
    col2: "World",
  },
  {
    col1: "react-table",
    col2: "rocks",
  },
  {
    col1: "whatever",
    col2: "you want",
  },
];

export const tableDataAtom = atom(INIT_TABLE_DATA);
export const tableColumnAtom = atom(INIT_COL_HEADER);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </AppLayout>
  );
}

export default MyApp;
