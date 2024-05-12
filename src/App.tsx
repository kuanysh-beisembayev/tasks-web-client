import { Route, Router, Switch } from "wouter";
import TaskModule from "./modules/TaskModule";
import Layout from "./modules/Shared/components/Layout";
import AuthModule from "./modules/AuthModule";
import AuthRequired from "./modules/AuthModule/components/AuthRequired";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route
            path="/auth"
            component={AuthModule}
            nest
          />
          <AuthRequired>
            <Route
              path="/"
              component={TaskModule}
              nest
            />
          </AuthRequired>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
