import HorizontalWrapper from "../../../TaskModule/components/HorizontalWrapper";
import LoginForm from "../../widgets/LoginForm";

const LoginPage = () => {
  return (
    <div className="grow flex flex-col">
      <HorizontalWrapper>
        <div className="prose">
          <h2 className="m-0 text-center">Welcome</h2>
        </div>
      </HorizontalWrapper>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
