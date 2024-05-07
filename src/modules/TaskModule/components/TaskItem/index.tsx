import { ChangeEvent, FC, MouseEvent } from "react";
import { NewTask, Task } from "../../types";
import TaskApiService from "../../services/api";
import classNames from "classnames";
import { useBrowserLocation } from "wouter/use-browser-location";
import { toast } from "sonner";

type Props = {
  task: Task;
  onChange: (task: Task) => void;
};

const TaskItem: FC<Props> = ({ task, onChange }) => {
  const [, setLocation] = useBrowserLocation();

  const handleClick = () => {
    setLocation(`/tasks/${task.id}`);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTask: NewTask = {
      ...task,
      status: event.target.checked ? "completed" : "new",
    };
    TaskApiService.updateTask(task.id, newTask).then((task) => {
      onChange(task);

      if (task.status === "completed") {
        toast.success("Task Completed");
      }
    });
  };

  return (
    <div
      className="px-4 py-6 flex items-center space-x-4 border-b last:border-b-0 prose cursor-pointer"
      onClick={handleClick}
    >
      <h4
        className={classNames("m-0 grow truncate", {
          "line-through": task.status === "completed",
        })}
      >
        {task.name}
      </h4>
      <input
        type="checkbox"
        className="checkbox checkbox-primary rounded-full"
        checked={task.status === "completed"}
        onChange={handleChange}
        onClick={(event: MouseEvent) => event.stopPropagation()}
      />
    </div>
  );
};

export default TaskItem;
