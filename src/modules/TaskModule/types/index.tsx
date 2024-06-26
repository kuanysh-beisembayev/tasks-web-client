export type Task = {
  id: string;
  name: string;
  completed_at: string | null;
  created_at: string;
  is_important: boolean;
};

export type NewTask = Omit<Task, "id" | "completed_at" | "created_at">;
