import React from "react";
import { default as Button } from "@/core/Button/_Button";

function RenderCheck({ props }: any) {
  const [count, setCount] = React.useState(0);
  const renders = React.useRef(0);
  console.log(props?.data);
  return (
    <div>
      <div>count: {count}</div>
      <div>render: {renders.current++} </div>
      <Button title="setCount" onClick={() => setCount((prev) => prev + 1)} />
    </div>
  );
}

export default React.memo(
  RenderCheck,
  (prevProps, nextProps) => {
    //console.log("what", prevProps.data.hasData !== nextProps.data.hasData);
    //console.log("check", prevProps.data);
    //console.log("check", nextProps.data);
    return notEqualReRender(prevProps, nextProps);
  }
  // if prevProp.data !== nextProp => true => re-rendering
  // else flase means to not rerender
);

function notEqualReRender(prev: any, next: any) {
  return prev.data.haveData !== next.haveData;
}

/**
 *  Becareful of anon function being passed as props because each rerender will assume its a new function and re-render it
 *  IN addition passing newObject will cause render
 */

/**
 *  Updating the state of react, causes the entire component to re render
 *  From top to buttom
 */
