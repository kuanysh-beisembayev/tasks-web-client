import { NewTask } from "../types";

export const createNewTask = (): NewTask => {
  return {
    name: "",
    status: "new",
  };
};
