import { atom } from "jotai";
export interface LightSwitchData {
  status: boolean;
}

export const LightSwitchAtom = atom<LightSwitchData>({ status: true });
