import { Route, Switch } from "wouter";
import Layout from "../Shared/components/Layout";
import MyProfilePage from "./pages/MyProfilePage";

const ProfileModule = () => {
  return (
    <Layout withNavbar>
      <Switch>
        <Route
          path="/me"
          component={MyProfilePage}
        />
      </Switch>
    </Layout>
  );
};

export default ProfileModule;
