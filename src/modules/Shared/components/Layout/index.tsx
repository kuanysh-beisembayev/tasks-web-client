import { ReactNode, FC } from "react";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="max-w-[500px] px-4 mx-auto min-h-dvh flex flex-col">
      {children}
    </div>
  );
};

export default Layout;
