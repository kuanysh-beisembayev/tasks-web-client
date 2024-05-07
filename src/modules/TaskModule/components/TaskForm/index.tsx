import { FC } from "react";
import { NewTask } from "../../types";
import HorizontalWrapper from "../HorizontalWrapper";
import { useForm } from "react-hook-form";

type Props = {
  initialTask: NewTask;
  isLoading: boolean;
  onSubmit: (task: NewTask) => void;
};

const TaskForm: FC<Props> = ({ initialTask, isLoading, onSubmit }) => {
  const { register, handleSubmit } = useForm<NewTask>({
    defaultValues: initialTask,
  });

  return (
    <form
      className="grow flex flex-col space-y-4"
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <div className="grow space-y-4">
        <label className="form-control">
          <div className="label">
            <span className="label-text">Task name</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered rounded-full"
            autoFocus
            {...register("name")}
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Task status</span>
          </div>
          <select
            className="select select-bordered rounded-full"
            {...register("status")}
          >
            <option value="new">New</option>
            <option value="completed">Completed</option>
          </select>
        </label>
      </div>
      <HorizontalWrapper>
        <button
          type="submit"
          className="btn btn-primary btn-block rounded-full"
        >
          Save
          {isLoading && <span className="loading loading-spinner" />}
        </button>
      </HorizontalWrapper>
    </form>
  );
};

export default TaskForm;
