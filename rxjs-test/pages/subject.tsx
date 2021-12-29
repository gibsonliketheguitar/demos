import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Subject } from "rxjs";

var reRender = 0;
const SubjectTest: NextPage = () => {
  reRender++;
  const [state, setState] = useState(0);
  const subject = new Subject<any>();

  useEffect(() => {
    console.log(state);
  }, [state]);

  subject.subscribe({
    next: (v) => console.log(`observer A: ${v}`),
  });

  const handleSetState = () => {
    setState((x) => {
      const val = (x += 1);
      subject.next(val);
      return val;
    });
  };

  return (
    <div>
      {reRender}
      <br />
      {state}
      <button onClick={handleSetState}> updateState</button>
    </div>
  );
};

export default SubjectTest;
