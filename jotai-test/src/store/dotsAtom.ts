import { atom } from "jotai";

export type Point = [number, number];

export const dotsAtom = atom<Point[]>([]);
export const mouseMoveAtom = atom<Boolean>(false);
export const numberOfDotsAtom = atom((get) => get(dotsAtom).length);
