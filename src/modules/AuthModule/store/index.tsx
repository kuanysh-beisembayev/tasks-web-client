import { atom } from "recoil";
import { Auth } from "../types";
import AuthCacheService from "../services/cache";

export const authState = atom<Auth | null>({
  key: "auth",
  default: AuthCacheService.getAuth(),
});
