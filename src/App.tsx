import { Route, Router, Switch } from "wouter";
import TaskModule from "./modules/TaskModule";
import { useSetRecoilState } from "recoil";
import Layout from "./modules/Shared/components/Layout";
import AuthModule from "./modules/AuthModule";
import AuthRequired from "./modules/AuthModule/components/AuthRequired";
import { useEffect } from "react";
import { authState } from "./modules/AuthModule/store";
import AuthCacheService from "./modules/AuthModule/services/cache";

const App = () => {
  const setAuth = useSetRecoilState(authState);

  useEffect(() => {
    setAuth(AuthCacheService.getAuth());
  }, [setAuth]);

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
              path="/tasks"
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
