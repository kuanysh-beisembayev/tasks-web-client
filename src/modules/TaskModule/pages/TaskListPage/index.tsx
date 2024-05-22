import { Link } from "wouter";
import TodoTaskList from "../../widgets/TodoTaskList";
import Heading from "../../../Shared/components/Heading";
import HorizontalWrapper from "../../../Shared/components/HorizontalWrapper";

const TaskListPage = () => {
  return (
    <div className="grow flex flex-col">
      <HorizontalWrapper>
        <Heading>Todo</Heading>
      </HorizontalWrapper>
      <div className="grow overflow-y-auto">
        <TodoTaskList />
      </div>
      <HorizontalWrapper>
        <Link
          to="/task/new"
          className="btn btn-primary btn-block rounded-full"
        >
          Add New Task
        </Link>
      </HorizontalWrapper>
    </div>
  );
};

export default TaskListPage;
