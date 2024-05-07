import { atom } from "recoil";
import { Task } from "../types";

export const tasksState = atom<Task[]>({
  key: "tasks",
  default: [],
});
