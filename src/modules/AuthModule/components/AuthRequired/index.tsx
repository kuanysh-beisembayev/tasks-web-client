import { FC, ReactNode } from "react";
import { useRecoilValue } from "recoil";
import { authState } from "../../store";
import { Redirect } from "wouter";

type Props = {
  children: ReactNode;
};

const AuthRequired: FC<Props> = ({ children }) => {
  const auth = useRecoilValue(authState);

  if (!auth) {
    return (
      <Redirect
        to="/auth/login"
        replace
      />
    );
  }

  return children;
};

export default AuthRequired;
