import { Link } from "wouter";
import HorizontalWrapper from "../../components/HorizontalWrapper";
import TaskCreateForm from "../../widgets/TaskCreateForm";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const TaskCreatePage = () => {
  return (
    <div className="grow flex flex-col">
      <HorizontalWrapper
        leftButton={
          <Link
            to="/"
            className="btn btn-circle btn-sm"
          >
            <ChevronLeftIcon className="size-5" />
          </Link>
        }
      >
        <div className="prose">
          <h2 className="m-0 text-center">Add New Task</h2>
        </div>
      </HorizontalWrapper>
      <TaskCreateForm />
    </div>
  );
};

export default TaskCreatePage;
