import TaskUpdateForm from "../../widgets/TaskUpdateForm";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "wouter";
import Heading from "../../../Shared/components/Heading";
import HorizontalWrapper from "../../../Shared/components/HorizontalWrapper";
import DropdownMenu from "../../widgets/DropdownMenu";

const TaskDetailPage = () => {
  return (
    <div className="grow flex flex-col">
      <HorizontalWrapper
        left={
          <Link
            to="/"
            className="btn btn-circle btn-sm btn-ghost"
          >
            <ChevronLeftIcon className="size-5" />
          </Link>
        }
        right={<DropdownMenu />}
      >
        <Heading>Edit Task</Heading>
      </HorizontalWrapper>
      <TaskUpdateForm />
    </div>
  );
};

export default TaskDetailPage;
