import React from "react";
import { default as Button } from "@/core/Button/_Button";

function RenderCheck() {
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

export default React.memo(RenderCheck);

/**
 *  Updating the state of react, causes the entire component to re render
 *  From top to buttom
 */
