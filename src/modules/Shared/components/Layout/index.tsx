import { ReactNode, FC } from "react";
import Navbar from "../Navbar";

type Props = {
  children: ReactNode;
  withNavbar?: boolean;
};

const Layout: FC<Props> = ({ children, withNavbar }) => {
  return (
    <div className="max-w-[500px] px-4 mx-auto min-h-dvh flex flex-col">
      {children}
      {withNavbar && <Navbar />}
    </div>
  );
};

export default Layout;
