import { atom } from "jotai";
export interface TurnOffLightData {
  status: boolean;
}

export const TurnOffLightAtom = atom<TurnOffLightData>({ status: false });
