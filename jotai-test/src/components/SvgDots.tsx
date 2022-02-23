import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import {
  dotsAtom,
  mouseMoveAtom,
  numberOfDotsAtom,
  Point,
} from "../store/dotsAtom";
import { useAtomValue, useUpdateAtom } from "jotai/utils";

export function Stats() {
  const [numberOfDots] = useAtom(numberOfDotsAtom);
  return (
    <ul>
      <li>Dots: {numberOfDots}</li>
    </ul>
  );
}

export default function RenderCheck() {
  const commitCountRef = useRef(0);
  useEffect(() => {
    commitCountRef.current += 1;
  });
  return commitCountRef.current;
}

export function SvgDots() {
  const [dots] = useAtom(dotsAtom);
  return (
    <g>
      {dots.map(([x, y]) => (
        <circle cx={x} cy={y} r="2" fill="#aaa" />
      ))}
    </g>
  );
}

export function SvgRoot() {
  const [_, setDots] = useAtom(dotsAtom); //still don't understand, so when a state get updated, does setState get updated as well?
  //using dot atom directly causes re-render?
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      onMouseMove={(e) => {
        const p: Point = [e.clientX, e.clientY];
        setDots((prev) => [...prev, p]);
      }}
    >
      <rect width="200" height="200" fill="#eee" />
      <text x="3" y="12" font-size="12px">
        Commits: {RenderCheck()}
      </text>
      <SvgDots />
    </svg>
  );
}
