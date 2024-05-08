import { useEffect, useState } from "react";
import { Task } from "../../types";
import TaskApiService from "../../services/api";
import TaskGroup from "../../components/TaskGroup";
import { useRecoilState, useRecoilValue } from "recoil";
import { tasksState } from "../../store";
import { authState } from "../../../AuthModule/store";
import { Auth } from "../../../AuthModule/types";

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
  }, [auth.accessToken, setTasks, tasks.length]);

  const handleTaskChange = (updatedTask: Task) => {
    setTasks((tasks) =>
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
    );
  };

  const newTasks = tasks.filter((task) => task.status === "new");
  const completedTasks = tasks.filter((task) => task.status === "completed");

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner"></span>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-h-[10vh]">
      {newTasks.length > 0 && (
        <TaskGroup
          tasks={newTasks}
          onTaskChange={handleTaskChange}
        />
      )}
      {completedTasks.length > 0 && (
        <>
          <div className="prose">
            <h3 className="m-0">Completed</h3>
          </div>
          <TaskGroup
            tasks={completedTasks}
            onTaskChange={handleTaskChange}
          />
        </>
      )}
    </div>
  );
};

export default TaskList;
