import { Link } from "wouter";
import TaskList from "../../widgets/TaskList";
import HorizontalWrapper from "../../components/HorizontalWrapper";

const TaskListPage = () => {
  return (
    <div className="grow flex flex-col">
      <HorizontalWrapper>
        <div className="prose">
          <h2 className="m-0 text-center">Tasks</h2>
        </div>
      </HorizontalWrapper>
      <div className="grow space-y-4 overflow-y-auto">
        <TaskList />
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
