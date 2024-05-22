import { FC } from "react";
import { Task } from "../../types";
import TaskItem from "../TaskItem";
import { AnimatePresence, motion } from "framer-motion";
import { animationProps } from "../../../Shared/consts";

type Props = {
  tasks: Task[];
  isLoading: boolean;
  onTaskChange: (updatedTask: Task) => void;
};

const TaskList: FC<Props> = ({ tasks, isLoading, onTaskChange }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner" />
      </div>
    );
  }

  return (
    <div className="space-y-3 max-h-[10vh]">
      <AnimatePresence initial={false}>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            {...animationProps}
            layout
          >
            <TaskItem
              task={task}
              onChange={onTaskChange}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;
