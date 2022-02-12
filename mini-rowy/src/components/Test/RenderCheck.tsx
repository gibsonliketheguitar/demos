import React from "react";
import { default as Button } from "@/core/Button/_Button";

export default function RenderTest() {
  const [count, setCount] = React.useState(0);
  const renders = React.useRef(0);

  return (
    <div>
      <div>count: {count}</div>
      <div>render: {renders.current++} </div>
      <Button title="setCount" onClick={() => setCount((prev) => prev + 1)} />
    </div>
  );
}
