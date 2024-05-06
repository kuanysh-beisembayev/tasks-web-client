import { Route, Router, Switch } from "wouter";
import TaskModule from "./modules/TaskModule";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="max-w-[500px] p-4 mx-auto min-h-dvh flex flex-col">
      {children}
    </div>
  );
};

const App = () => {
  return (
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
  );
};

export default App;
