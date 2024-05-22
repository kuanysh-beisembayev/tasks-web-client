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
    if (!isCompleted) {
      setLocation(`/task/${task.id}`);
    }
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
      className={classNames("p-2 flex space-x-2 border rounded-lg", {
        "cursor-pointer": !isCompleted,
      })}
      onClick={handleClick}
    >
      <div className="grow min-w-0 flex flex-col space-y-2">
        <div className="flex items-center space-x-1">
          {task.is_important && !isCompleted && (
            <span className="bg-red-400 w-2 h-2 rounded-full shrink-0" />
          )}
          <h4
            className={classNames("truncate text-sm leading-none", {
              "line-through": isCompleted,
            })}
          >
            {task.name}
          </h4>
        </div>
        <span className="text-xs leading-none text-neutral-500">
          {isCompleted
            ? `Completed ${formatDateString(task.completed_at as string)}`
            : `Created ${formatDateString(task.created_at)}`}
        </span>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="checkbox checkbox-primary rounded-full"
          checked={isCompleted}
          onChange={handleChange}
          onClick={(event: MouseEvent) => event.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default TaskItem;
