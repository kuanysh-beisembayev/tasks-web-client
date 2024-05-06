export type Task = {
  id: string;
  name: string;
  description: string | null;
  status: "new" | "done";
};
