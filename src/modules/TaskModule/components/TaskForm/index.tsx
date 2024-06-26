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
      onSubmit={handleSubmit(onSubmit)}
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
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Important Task</span>
            <input
              type="checkbox"
              className="toggle"
              {...register("is_important")}
            />
          </label>
        </div>
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
