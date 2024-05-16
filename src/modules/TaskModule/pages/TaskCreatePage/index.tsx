import { Link } from "wouter";
import TaskCreateForm from "../../widgets/TaskCreateForm";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Heading from "../../../Shared/components/Heading";
import HorizontalWrapper from "../../../Shared/components/HorizontalWrapper";

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
        <Heading>Add New Task</Heading>
      </HorizontalWrapper>
      <TaskCreateForm />
    </div>
  );
};

export default TaskCreatePage;
