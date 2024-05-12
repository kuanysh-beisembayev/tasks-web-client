import { Route, Switch } from "wouter";
import MyProfilePage from "./pages/MyProfilePage";

const ProfileModule = () => {
  return (
    <Switch>
      <Route
        path="/me"
        component={MyProfilePage}
      />
    </Switch>
  );
};

export default ProfileModule;
