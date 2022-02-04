import { atom } from "jotai";

const initState = {
  columns: [
    { key: "id", name: "ID" },
    { key: "title", name: "Title" },
  ],
  rows: [
    { id: 0, title: "Example" },
    { id: 1, title: "Demo" },
  ],
};

export const globalModalAtom = atom(false);
export const tableStateAtom = atom(initState);
