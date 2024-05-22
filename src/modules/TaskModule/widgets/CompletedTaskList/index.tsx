import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { completedTasksState } from "../../store";
import { authState } from "../../../AuthModule/store";
import { Auth } from "../../../AuthModule/types";
import TaskApiService from "../../services/api";
import { Task } from "../../types";
import TaskList from "../../components/TaskList";

const CompletedTaskList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useRecoilState(completedTasksState);
  const auth = useRecoilValue(authState) as Auth;

  useEffect(() => {
    if (tasks.length === 0) {
      setIsLoading(true);
    }

    TaskApiService.getCompletedTasks(auth.accessToken)
      .then((tasks) => {
        setTasks(tasks);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [auth.accessToken, setTasks]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTaskChange = (updatedTask: Task) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== updatedTask.id));
  };

  return (
    <TaskList
      tasks={tasks}
      isLoading={isLoading}
      onTaskChange={handleTaskChange}
    />
  );
};

export default CompletedTaskList;
