import { useEffect, useState } from "react";

//Creating a timer with custom Hook
export default function useAlarm(start: any) {
  const [lock, setLock] = useState(false);
  const [timer, setTimer] = useState(start);
  const [canRestart, setCanResart] = useState(false);

  const countDown = (x: number, tick: NodeJS.Timer) => {
    let state = undefined;
    if (x > 1) {
      state = x - 1;
    } else {
      state = "Wake Up";
      clearInterval(tick);
      setCanResart(true);
    }
    return state;
  };

  const setTick = () => {
    const tick = setInterval(
      () => setTimer((x: number) => countDown(x, tick)),
      1000
    );
    return tick;
  };

  useEffect(() => {
    if (lock) return;
    const timer = setTick();
    return () => clearInterval(timer);
  }, [canRestart]);

  const resetTimer = () => {
    if (canRestart && !lock) {
      setTimer(start);
      setCanResart(false);
    }
  };

  const lockAlarm = () => {
    setLock(true);
    setTimer("Get to work Peasent");
  };

  return { timer, resetTimer, lockAlarm };
}
