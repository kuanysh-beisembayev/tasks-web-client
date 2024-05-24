import { FC, ReactNode } from "react";

type Props = {
  left?: ReactNode;
  children: ReactNode;
  right?: ReactNode;
};

const HorizontalWrapper: FC<Props> = ({ left, children, right }) => {
  return (
    <div className="py-4 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2">{left}</div>
      {children}
      <div className="absolute right-0 top-1/2 -translate-y-1/2">{right}</div>
    </div>
  );
};

export default HorizontalWrapper;
