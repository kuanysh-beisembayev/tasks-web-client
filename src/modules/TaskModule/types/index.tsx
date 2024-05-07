export type Task = {
  id: string;
  name: string;
  status: "new" | "completed";
};

export type NewTask = Omit<Task, "id">;
