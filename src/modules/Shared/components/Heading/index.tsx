import { FC } from "react";

type Props = {
  children: string;
};

const Heading: FC<Props> = ({ children }) => {
  return (
    <h1 className="text-center font-semibold leading-none text-base">
      {children}
    </h1>
  );
};

export default Heading;
