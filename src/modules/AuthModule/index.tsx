import { Route, Switch } from "wouter";
import LoginPage from "./pages/LoginPage";

const AuthModule = () => {
  return (
    <Switch>
      <Route
        path="/login"
        component={LoginPage}
      />
    </Switch>
  );
};

export default AuthModule;
