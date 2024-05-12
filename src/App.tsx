import { Route, Router, Switch } from "wouter";
import TaskModule from "./modules/TaskModule";
import AuthModule from "./modules/AuthModule";
import AuthRequired from "./modules/AuthModule/components/AuthRequired";
import ProfileModule from "./modules/ProfileModule";

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
        </AuthRequired>
      </Switch>
    </Router>
  );
};

export default App;
