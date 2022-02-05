import { useAtomValue, useUpdateAtom } from "jotai/utils";
import { tableColumnAtom, tableDataAtom } from "pages/_app";

export function readTableColumnsAtom() {
  const tableColumns = useAtomValue(tableColumnAtom);
  return { tableColumns };
}

export function updateTableColumnAtom() {
  const updateTableColumns = useUpdateAtom(tableColumnAtom);
  return { updateTableColumns };
}

export function updateTableDataAtom() {
  const updateTableData = useUpdateAtom(tableDataAtom);
  return { updateTableData };
}

export function readTableDataAtom() {
  const tableData = useAtomValue(tableDataAtom);
  return { tableData };
}
