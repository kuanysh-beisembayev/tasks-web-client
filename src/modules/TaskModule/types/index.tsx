export type Task = {
  id: string;
  name: string;
  status: "new" | "completed";
  created_at: string;
};

export type NewTask = Omit<Task, "id" | "created_at">;
