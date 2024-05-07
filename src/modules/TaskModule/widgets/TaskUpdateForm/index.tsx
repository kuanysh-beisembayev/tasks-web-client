import { ChangeEvent, useEffect, useState } from "react";
import { Task } from "../../types";
import TaskApiService from "../../services/api";
import { useParams } from "wouter";

const TaskUpdateForm = () => {
  const [task, setTask] = useState<Task | null>(null);
  const params = useParams();

  useEffect(() => {
    TaskApiService.getTask(params.taskId as string).then((task) => {
      setTask(task);
    });
  }, [params.taskId]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTask((task) => ({ ...(task as Task), [name]: value }));
  };

  if (!task) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner"></span>
      </div>
    );
  }

  return (
    <form className="grow flex flex-col space-y-4">
      <label className="form-control grow">
        <div className="label">
          <span className="label-text">Task name</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered rounded-full"
          autoFocus
          value={task.name}
          name="name"
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default TaskUpdateForm;
