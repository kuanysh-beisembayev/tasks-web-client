import { Route, Router, Switch } from "wouter";
import TaskModule from "./modules/TaskModule";
import { RecoilRoot } from "recoil";
import Layout from "./modules/Shared/components/Layout";

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <Layout>
          <Switch>
            <Route
              path="/tasks"
              component={TaskModule}
              nest
            />
          </Switch>
        </Layout>
      </Router>
    </RecoilRoot>
  );
};

export default App;
