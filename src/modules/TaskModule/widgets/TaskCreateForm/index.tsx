import { ChangeEvent, FormEvent, useState } from "react";
import TaskApiService from "../../services/api";
import { useBrowserLocation } from "wouter/use-browser-location";
import HorizontalWrapper from "../../components/HorizontalWrapper";

const TaskCreateForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [, setLocation] = useBrowserLocation();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value.trimStart());
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setIsLoading(true);
    TaskApiService.createTask(name.trimEnd())
      .then(() => {
        setLocation(`/tasks`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form
      className="grow flex flex-col space-y-4"
      onSubmit={handleSubmit}
    >
      <label className="form-control grow">
        <div className="label">
          <span className="label-text">Task name</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered rounded-full"
          autoFocus
          value={name}
          onChange={handleChange}
        />
      </label>
      <HorizontalWrapper>
        <button
          type="submit"
          className="btn btn-primary btn-block rounded-full"
          disabled={name.trim().length === 0}
        >
          Save
          {isLoading && <span className="loading loading-spinner"></span>}
        </button>
      </HorizontalWrapper>
    </form>
  );
};

export default TaskCreateForm;
