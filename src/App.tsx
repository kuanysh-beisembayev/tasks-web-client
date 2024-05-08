import { Route, Router, Switch } from "wouter";
import TaskModule from "./modules/TaskModule";
import { RecoilRoot } from "recoil";
import Layout from "./modules/Shared/components/Layout";
import AuthModule from "./modules/AuthModule";
import AuthRequired from "./modules/AuthModule/components/AuthRequired";

const App = () => {
  return (
    <RecoilRoot>
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
                path="/tasks"
                component={TaskModule}
                nest
              />
            </AuthRequired>
          </Switch>
        </Layout>
      </Router>
    </RecoilRoot>
  );
};

export default App;
