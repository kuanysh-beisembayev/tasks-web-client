import { useEffect, useState } from "react";
import { NewTask, Task } from "../../types";
import TaskApiService from "../../services/api";
import { useParams } from "wouter";
import TaskForm from "../../components/TaskForm";
import { useBrowserLocation } from "wouter/use-browser-location";
import { toast } from "sonner";
import { useRecoilValue } from "recoil";
import { authState } from "../../../AuthModule/store";
import { Auth } from "../../../AuthModule/types";

const TaskUpdateForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [task, setTask] = useState<Task | null>(null);
  const params = useParams();
  const [, setLocation] = useBrowserLocation();
  const auth = useRecoilValue(authState) as Auth;

  useEffect(() => {
    TaskApiService.getTask(auth.accessToken, params.taskId as string).then(
      (task) => {
        setTask(task);
      },
    );
  }, [auth.accessToken, params.taskId]);

  const handleSubmit = (newTask: NewTask) => {
    setIsLoading(true);

    TaskApiService.updateTask(auth.accessToken, (task as Task).id, newTask)
      .then(() => {
        toast.success("Task Saved");
        setLocation("/");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (!task) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner" />
      </div>
    );
  }

  return (
    <TaskForm
      initialTask={task}
      isLoading={isLoading}
      onSubmit={handleSubmit}
    />
  );
};

export default TaskUpdateForm;
