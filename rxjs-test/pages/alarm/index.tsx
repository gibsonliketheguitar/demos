import { useObservableState } from "observable-hooks";
import useAlarm from "./hooks/useAlarm";
import { action$, finalAlarm$ } from "./store/alarm";

export default function Alarm() {
  const { timer, resetTimer, lockAlarm } = useAlarm(10);
  const timer2: any = useObservableState(finalAlarm$, 0);

  const handleSnooze = () => {
    action$.next("snooze");
    resetTimer();
  };

  const handleStop = () => {
    action$.next("dismiss");
    lockAlarm();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2> Alarm Clock</h2>
      <div>
        Timer using <strong>custom Hook </strong> {timer}
      </div>
      <div>
        Timer using <strong>RxJs</strong> {timer2}
      </div>
      <div className="flex space-between justify-center items-center">
        <button onClick={handleSnooze}> Snooze </button>
        <span className="w-24" />
        <button onClick={handleStop}> Dismiss </button>
      </div>
    </div>
  );
}
