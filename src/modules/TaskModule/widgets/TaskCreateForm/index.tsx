import { useState } from "react";
import TaskApiService from "../../services/api";
import { useBrowserLocation } from "wouter/use-browser-location";
import TaskForm from "../../components/TaskForm";
import { NewTask } from "../../types";
import { createNewTask } from "../../utils";
import { toast } from "sonner";
import { useRecoilValue } from "recoil";
import { authState } from "../../../AuthModule/store";
import { Auth } from "../../../AuthModule/types";

const TaskCreateForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [, setLocation] = useBrowserLocation();
  const auth = useRecoilValue(authState) as Auth;

  const handleSubmit = (task: NewTask) => {
    setIsLoading(true);

    TaskApiService.createTask(auth.accessToken, task)
      .then(() => {
        toast.success("Task Saved");
        setLocation("/");
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
