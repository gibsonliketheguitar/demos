import {
  concat,
  filter,
  interval,
  of,
  repeatWhen,
  scan,
  share,
  startWith,
  Subject,
  takeUntil,
  takeWhile,
} from "rxjs";

export const initAlarm$ = interval(1000)
  .pipe(
    startWith(10),
    scan((timer) => timer - 1),
    takeWhile((time) => time > 0)
  )
  .pipe(share());
//everytime you subscribe to an observable, a new one is create.\
//share makes sure that an obsevable finish emitting, then you can create another one

//subjects are both observable and observers
const action$ = new Subject();
const snooze$ = action$.pipe(filter((action: any) => action === "snooze"));
const dismiss$ = action$.pipe(filter((action: any) => action === "dismiss"));

//concat goes combines 2 observable. goes through first one then emits second one
const alarm$ = concat(initAlarm$, of("wake up!")).pipe(
  repeatWhen(() => snooze$)
);

const finalAlarm$ = concat(
  alarm$.pipe(takeUntil(dismiss$)),
  of("Get to work peasent")
);

export { action$, finalAlarm$ };
