export type Task = {
  id: string;
  name: string;
  status: "new" | "done";
};

export type NewTask = Omit<Task, "id">;
