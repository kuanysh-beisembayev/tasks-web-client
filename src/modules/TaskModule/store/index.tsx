import { atom } from "recoil";
import { Task } from "../types";

export const tasksState = atom<Task[]>({
  key: "tasks",
  default: [],
});

export const completedTasksState = atom<Task[]>({
  key: "completedTasks",
  default: [],
});
