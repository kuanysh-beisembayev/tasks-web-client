import { Route, Switch } from "wouter";
import TaskListPage from "./pages/TaskListPage";
import TaskCreatePage from "./pages/TaskCreatePage";
import TaskDetailPage from "./pages/TaskDetailPage";
import Layout from "../Shared/components/Layout";

const TaskModule = () => {
  return (
    <Layout withNavbar>
      <Switch>
        <Route
          path="/"
          component={TaskListPage}
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
    </Layout>
  );
};

export default TaskModule;
