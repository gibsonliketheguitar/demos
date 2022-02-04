import { useAtom } from "jotai";
import { tableStateAtom } from "store/atoms";

export default function useGlobalTableState() {
  const [tableState, setTableState] = useAtom(tableStateAtom);

  function dispatch({ type, data }: any) {
    switch (type) {
      case "add":
        setTableState({ ...data });
        break;
      case "update":
        setTableState((prevState) => ({ ...prevState, ...data }));
        break;
      default:
        console.log("default");
        break;
    }
  }

  return {
    tableState,
    dispatch,
  };
}
