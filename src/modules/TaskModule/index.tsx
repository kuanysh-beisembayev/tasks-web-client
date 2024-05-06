import { Route } from "wouter";
import TaskListPage from "./pages/TaskListPage";
import TaskCreatePage from "./pages/TaskCreatePage";

const TaskModule = () => {
  return (
    <>
      <Route
        path="/"
        component={TaskListPage}
      />
      <Route
        path="/new"
        component={TaskCreatePage}
      />
    </>
  );
};

export default TaskModule;
