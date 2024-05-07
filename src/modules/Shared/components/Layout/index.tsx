import { ReactNode, FC } from "react";
import { Toaster } from "sonner";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="max-w-[500px] px-4 mx-auto min-h-dvh flex flex-col">
      <Toaster
        position="top-center"
        visibleToasts={1}
        richColors
        offset={0}
        toastOptions={{
          className: "rounded-none",
          duration: 2000,
        }}
      />
      {children}
    </div>
  );
};

export default Layout;
