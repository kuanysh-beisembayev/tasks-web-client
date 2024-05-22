import { Route, Switch } from "wouter";
import TaskListPage from "./pages/TaskListPage";
import TaskCreatePage from "./pages/TaskCreatePage";
import TaskDetailPage from "./pages/TaskDetailPage";
import CompletedTaskListPage from "./pages/CompletedTaskListPage";

const TaskModule = () => {
  return (
    <Switch>
      <Route
        path="/"
        component={TaskListPage}
      />
      <Route
        path="/completed"
        component={CompletedTaskListPage}
      />
      <Route
        path="/task/new"
        component={TaskCreatePage}
      />
      <Route
        path="/task/:taskId"
        component={TaskDetailPage}
      />
    </Switch>
  );
};

export default TaskModule;
