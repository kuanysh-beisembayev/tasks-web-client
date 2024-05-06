import { Link } from "wouter";
import TaskList from "../../widgets/TaskList";

const TaskListPage = () => {
  return (
    <div className="grow flex flex-col space-y-4">
      <div className="prose">
        <h2 className="m-0 text-center">Tasks</h2>
      </div>
      <div className="grow space-y-4 overflow-y-auto">
        <TaskList />
      </div>
      <Link
        to="/new"
        className="btn btn-primary rounded-full"
      >
        Add New Task
      </Link>
    </div>
  );
};

export default TaskListPage;
