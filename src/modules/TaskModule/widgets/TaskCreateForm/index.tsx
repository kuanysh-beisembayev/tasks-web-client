import { useState } from "react";
import TaskApiService from "../../services/api";
import { useBrowserLocation } from "wouter/use-browser-location";
import TaskForm from "../../components/TaskForm";
import { NewTask } from "../../types";
import { createNewTask } from "../../utils";
import { toast } from "sonner";

const TaskCreateForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [, setLocation] = useBrowserLocation();

  const handleSubmit = (task: NewTask) => {
    setIsLoading(true);

    TaskApiService.createTask(task)
      .then(() => {
        toast.success("Task Saved");
        setLocation(`/tasks`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <TaskForm
      initialTask={createNewTask()}
      isLoading={isLoading}
      onSubmit={handleSubmit}
    />
  );
};

export default TaskCreateForm;
