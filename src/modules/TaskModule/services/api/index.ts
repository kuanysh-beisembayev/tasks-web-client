import client from "../../../Shared/services/api/client";
import { NewTask, Task } from "../../types";

class TaskApiService {
  static async getTasks(accessToken: string) {
    const response = await client.get<Task[]>("/tasks", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }

  static async getCompletedTasks(accessToken: string) {
    const response = await client.get<Task[]>("/tasks/completed", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }

  static async updateTask(accessToken: string, taskId: string, task: NewTask) {
    const response = await client.put<Task>(`/tasks/${taskId}`, task, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }

  static async deleteTask(accessToken: string, taskId: string) {
    await client.delete(`/tasks/${taskId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  static async updateTaskStatus(
    accessToken: string,
    taskId: string,
    isCompleted: boolean,
  ) {
    const response = await client.post<Task>(
      `/tasks/${taskId}/status`,
      { is_completed: isCompleted },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    return response.data;
  }

  static async createTask(accessToken: string, task: NewTask) {
    const response = await client.post<Task>("/tasks", task, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }

  static async getTask(accessToken: string, taskId: string) {
    const response = await client.get<Task>(`/tasks/${taskId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }
}

export default TaskApiService;
