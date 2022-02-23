import { useAtom } from "jotai";
import { constAtom } from "../store/atom";

export default function Counter2() {
  const [count, setCount] = useAtom(constAtom);
  return (
    <div>
      {" "}
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
    </div>
  );
}
