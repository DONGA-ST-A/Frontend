import { atom } from "recoil";

import { LoginData } from "@/types";

import persistAtom from "./persisAtoms";

export const toastState = atom({
  key: "src/ATOM/index.tsx-toastState",
  default: "",
});
export const carouselState = atom({
  key: "src/ATOM/index.tsx-carouselState",
  default: false,
});

export const userState = atom<LoginData | undefined>({
  key: "userState",
  default: undefined,
  effects: [persistAtom],
});
