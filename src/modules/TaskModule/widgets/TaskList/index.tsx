import { useEffect, useState } from "react";
import { Task } from "../../types";
import TaskApiService from "../../services/api";
import TaskGroup from "../../components/TaskGroup";
import { useRecoilState, useRecoilValue } from "recoil";
import { tasksState } from "../../store";
import { authState } from "../../../AuthModule/store";
import { Auth } from "../../../AuthModule/types";
import { compareAsc, parseISO } from "date-fns";

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
    setTasks((tasks) =>
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
    );
  };

  const newTasks = tasks
    .filter((task) => task.completed_at === null)
    .sort((a, b) => {
      if (
        (a.is_important && b.is_important) ||
        (!a.is_important && !b.is_important)
      ) {
        return compareAsc(parseISO(a.created_at), parseISO(b.created_at));
      }

      if (a.is_important) {
        return -1;
      }

      if (b.is_important) {
        return 1;
      }

      return 0;
    });

  const completedTasks = tasks
    .filter((task) => task.completed_at !== null)
    .sort((a, b) =>
      compareAsc(
        parseISO(b.completed_at as string),
        parseISO(a.completed_at as string),
      ),
    );

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner" />
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
          <h3 className="font-semibold leading-none text-sm">Completed</h3>
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
