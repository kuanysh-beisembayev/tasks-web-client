import { ChangeEvent, FC, MouseEvent } from "react";
import { Task } from "../../types";
import TaskApiService from "../../services/api";
import classNames from "classnames";
import { useBrowserLocation } from "wouter/use-browser-location";

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
    TaskApiService.updateTask({
      ...task,
      status: event.target.checked ? "done" : "new",
    }).then((task) => {
      onChange(task);
    });
  };

  return (
    <div
      className="px-4 py-6 flex items-center space-x-4 border-b last:border-b-0 prose cursor-pointer"
      onClick={handleClick}
    >
      <h4
        className={classNames("m-0 grow truncate", {
          "line-through": task.status === "done",
        })}
      >
        {task.name}
      </h4>
      <input
        type="checkbox"
        className="checkbox checkbox-primary rounded-full"
        checked={task.status === "done"}
        onChange={handleChange}
        onClick={(event: MouseEvent) => event.stopPropagation()}
      />
    </div>
  );
};

export default TaskItem;
