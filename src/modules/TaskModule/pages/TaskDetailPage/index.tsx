import TaskUpdateForm from "../../widgets/TaskUpdateForm";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "wouter";
import Heading from "../../../Shared/components/Heading";
import HorizontalWrapper from "../../../Shared/components/HorizontalWrapper";

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
        <Heading>Edit Task</Heading>
      </HorizontalWrapper>
      <TaskUpdateForm />
    </div>
  );
};

export default TaskDetailPage;
