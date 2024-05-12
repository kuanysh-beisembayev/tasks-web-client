import { Route, Router, Switch } from "wouter";
import TaskModule from "./modules/TaskModule";
import AuthModule from "./modules/AuthModule";
import AuthRequired from "./modules/AuthModule/components/AuthRequired";
import ProfileModule from "./modules/ProfileModule";
import Layout from "./modules/Shared/components/Layout";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/auth"
          component={AuthModule}
          nest
        />
        <AuthRequired>
          <Layout withNavbar>
            <Route
              path="/profile"
              component={ProfileModule}
              nest
            />
            <Route
              path="/"
              component={TaskModule}
              nest
            />
          </Layout>
        </AuthRequired>
      </Switch>
    </Router>
  );
};

export default App;
