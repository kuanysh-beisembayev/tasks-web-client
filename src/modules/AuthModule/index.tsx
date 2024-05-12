import { Route, Switch } from "wouter";
import LoginPage from "./pages/LoginPage";
import Layout from "../Shared/components/Layout";

const AuthModule = () => {
  return (
    <Layout>
      <Switch>
        <Route
          path="/login"
          component={LoginPage}
        />
      </Switch>
    </Layout>
  );
};

export default AuthModule;
