import { FC } from "react";
import { NewTask } from "../../types";
import HorizontalWrapper from "../../../Shared/components/HorizontalWrapper";
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
            <span className="label-text">Task Name</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered rounded-xl"
            autoFocus
            {...register("name")}
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Task Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered rounded-xl resize-none text-base"
            placeholder="Type here"
            rows={3}
            {...register("description")}
          />
        </label>
      </div>
      <HorizontalWrapper>
        <button
          type="submit"
          className="btn btn-primary btn-block rounded-full"
        >
          Save Task
          {isLoading && <span className="loading loading-spinner" />}
        </button>
      </HorizontalWrapper>
    </form>
  );
};

export default TaskForm;
