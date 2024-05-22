import { useEffect, useState } from "react";
import { Task } from "../../types";
import TaskApiService from "../../services/api";
import { useRecoilState, useRecoilValue } from "recoil";
import { tasksState } from "../../store";
import { authState } from "../../../AuthModule/store";
import { Auth } from "../../../AuthModule/types";
import TaskItem from "../../components/TaskItem";

const TaskList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useRecoilState(tasksState);
  const auth = useRecoilValue(authState) as Auth;

  useEffect(() => {
    if (tasks.length === 0) {
      setIsLoading(true);
    }

    TaskApiService.getTasks(auth.accessToken)
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

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner" />
      </div>
    );
  }

  return (
    <div className="space-y-3 max-h-[10vh]">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onChange={handleTaskChange}
        />
      ))}
    </div>
  );
};

export default TaskList;
