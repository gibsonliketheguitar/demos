import { useAtom } from "jotai";
import { constAtom2 } from "../store/atom";

export default function Counter1() {
  const [count, setCount] = useAtom(constAtom2);
  return (
    <div>
      {" "}
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
    </div>
  );
}
