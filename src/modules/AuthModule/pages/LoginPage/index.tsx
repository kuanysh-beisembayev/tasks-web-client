import Heading from "../../../Shared/components/Heading";
import HorizontalWrapper from "../../../TaskModule/components/HorizontalWrapper";
import LoginForm from "../../widgets/LoginForm";

const LoginPage = () => {
  return (
    <div className="grow flex flex-col">
      <HorizontalWrapper>
        <Heading>Welcome</Heading>
      </HorizontalWrapper>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
