import { ChangeEvent, FC, MouseEvent } from "react";
import { Task } from "../../types";
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
    const isCompleted = event.target.checked;

    TaskApiService.updateTaskStatus(
      auth.accessToken,
      task.id,
      isCompleted,
    ).then((task) => {
      onChange(task);
    });
  };

  const isCompleted = task.completed_at !== null;

  return (
    <div
      className="p-2 flex flex-col space-y-1 border-b last:border-b-0 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-start space-x-4">
        <h4
          className={classNames("grow m-0 truncate text-sm leading-none", {
            "line-through": isCompleted,
          })}
        >
          {task.name}
        </h4>
        <input
          type="checkbox"
          className="checkbox checkbox-primary rounded-full"
          checked={isCompleted}
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
