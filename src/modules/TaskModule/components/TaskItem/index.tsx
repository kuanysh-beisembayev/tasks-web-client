import { ChangeEvent, FC, MouseEvent } from "react";
import { NewTask, Task } from "../../types";
import TaskApiService from "../../services/api";
import classNames from "classnames";
import { useBrowserLocation } from "wouter/use-browser-location";
import { useRecoilValue } from "recoil";
import { authState } from "../../../AuthModule/store";
import { Auth } from "../../../AuthModule/types";
import { formatDateString } from "../../utils";

type Props = {
  task: Task;
  onChange: (task: Task) => void;
};

const TaskItem: FC<Props> = ({ task, onChange }) => {
  const [, setLocation] = useBrowserLocation();
  const auth = useRecoilValue(authState) as Auth;

  const handleClick = () => {
    setLocation(`/task/${task.id}`);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTask: NewTask = {
      ...task,
      status: event.target.checked ? "completed" : "new",
    };
    TaskApiService.updateTask(auth.accessToken, task.id, newTask).then(
      (task) => {
        onChange(task);
      },
    );
  };

  return (
    <div
      className="p-2 flex flex-col space-y-1 border-b last:border-b-0 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center space-x-4">
        <h4
          className={classNames("grow m-0 truncate text-sm leading-none", {
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
      <span className="text-xs leading-none text-neutral-500">
        {formatDateString(task.created_at)}
      </span>
    </div>
  );
};

export default TaskItem;
