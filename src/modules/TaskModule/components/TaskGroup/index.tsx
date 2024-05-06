import { FC } from "react";
import { Task } from "../../types";
import TaskItem from "../TaskItem";

type Props = {
  tasks: Task[];
  onTaskChange: (task: Task) => void;
};

const TaskGroup: FC<Props> = ({ tasks, onTaskChange }) => {
  return (
    <div className="border rounded-xl">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onChange={onTaskChange}
        />
      ))}
    </div>
  );
};

export default TaskGroup;
