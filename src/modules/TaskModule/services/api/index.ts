import client from "../../../../services/api/client";
import { Task } from "../../types";

class TaskApiService {
  static async getTasks() {
    const response = await client.get<Task[]>("/tasks");
    return response.data;
  }

  static async updateTask(task: Task) {
    const response = await client.put<Task>(`/tasks/${task.id}`, task);
    return response.data;
  }

  static async createTask(name: string) {
    const response = await client.post<Task>("/tasks", { name });
    return response.data;
  }

  static async getTask(taskId: string) {
    const response = await client.get<Task>(`/tasks/${taskId}`);
    return response.data;
  }
}

export default TaskApiService;
