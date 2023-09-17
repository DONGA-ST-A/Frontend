import { atom } from "recoil";

import { LoginData } from "@/types";

import persistAtom from "./persisAtoms";

export const userState = atom<LoginData | undefined>({
  key: "userState",
  default: undefined,
  effects: [persistAtom],
});
