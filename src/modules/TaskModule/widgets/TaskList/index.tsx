import { useEffect, useState } from "react";
import { Task } from "../../types";
import TaskApiService from "../../services/api";
import TaskGroup from "../../components/TaskGroup";

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    TaskApiService.getTasks().then((tasks) => {
      setTasks(tasks);
    });
  }, []);

  const handleTaskChange = (updatedTask: Task) => {
    setTasks((tasks) =>
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
    );
  };

  const newTasks = tasks.filter((task) => task.status === "new");
  const completedTasks = tasks.filter((task) => task.status === "done");

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
