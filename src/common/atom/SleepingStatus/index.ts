import { atom } from "jotai";
export interface SleepingStatusData {
  status: boolean;
}

export const SleepingStatusAtom = atom<SleepingStatusData>({ status: false });
