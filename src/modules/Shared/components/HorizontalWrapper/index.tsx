import { FC, ReactNode } from "react";

type Props = {
  leftButton?: ReactNode;
  children: ReactNode;
};

const HorizontalWrapper: FC<Props> = ({ leftButton, children }) => {
  return (
    <div className="py-4 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        {leftButton}
      </div>
      {children}
    </div>
  );
};

export default HorizontalWrapper;
