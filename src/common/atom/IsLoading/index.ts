import { atom } from "jotai";
export interface LoadingData {
  status: boolean;
}

export const IsLoadingAtom = atom<LoadingData>({ status: true });
