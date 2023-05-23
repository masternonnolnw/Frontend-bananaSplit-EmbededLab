import { atom } from "jotai";
export interface WebcamSwitchData {
  status: boolean;
}

export const WebcamSwitchAtom = atom<WebcamSwitchData>({ status: true });
