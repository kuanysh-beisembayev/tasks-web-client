import { atom } from "recoil";
import { Auth } from "../types";

export const authState = atom<Auth | null>({
  key: "auth",
  default: null,
});
