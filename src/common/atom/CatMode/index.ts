import { atom } from "jotai";
export interface CatModeData {
  status: boolean;
}

export const CatModeAtom = atom<CatModeData>({ status: false });
