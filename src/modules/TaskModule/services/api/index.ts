import client from "../../../../services/api/client";
import { NewTask, Task } from "../../types";

class TaskApiService {
  static async getTasks() {
    const response = await client.get<Task[]>("/tasks");
    return response.data;
  }

  static async updateTask(taskId: string, task: NewTask) {
    const response = await client.put<Task>(`/tasks/${taskId}`, task);
    return response.data;
  }

  static async createTask(task: NewTask) {
    const response = await client.post<Task>("/tasks", task);
    return response.data;
  }

  static async getTask(taskId: string) {
    const response = await client.get<Task>(`/tasks/${taskId}`);
    return response.data;
  }
}

export default TaskApiService;
