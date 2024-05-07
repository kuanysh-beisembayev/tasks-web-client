import { useEffect, useState } from "react";
import { NewTask, Task } from "../../types";
import TaskApiService from "../../services/api";
import { useParams } from "wouter";
import TaskForm from "../../components/TaskForm";
import { useBrowserLocation } from "wouter/use-browser-location";
import { toast } from "sonner";

const TaskUpdateForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [task, setTask] = useState<Task | null>(null);
  const params = useParams();
  const [, setLocation] = useBrowserLocation();

  useEffect(() => {
    TaskApiService.getTask(params.taskId as string).then((task) => {
      setTask(task);
    });
  }, [params.taskId]);

  const handleSubmit = (newTask: NewTask) => {
    setIsLoading(true);

    TaskApiService.updateTask((task as Task).id, newTask)
      .then(() => {
        toast.success("Task Saved");
        setLocation("/tasks");
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
