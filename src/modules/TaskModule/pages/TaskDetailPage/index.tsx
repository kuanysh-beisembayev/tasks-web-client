import TaskUpdateForm from "../../widgets/TaskUpdateForm";
import HorizontalWrapper from "../../components/HorizontalWrapper";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "wouter";

const TaskDetailPage = () => {
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
      <TaskUpdateForm />
    </div>
  );
};

export default TaskDetailPage;
