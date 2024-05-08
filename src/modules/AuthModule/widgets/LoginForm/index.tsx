import { useForm } from "react-hook-form";
import HorizontalWrapper from "../../../TaskModule/components/HorizontalWrapper";
import { useState } from "react";
import AuthApiService from "../../services/api";
import { useSetRecoilState } from "recoil";
import { authState } from "../../store";
import { useBrowserLocation } from "wouter/use-browser-location";
import AuthCacheService from "../../services/cache";

type LoginData = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<LoginData>();
  const setAuth = useSetRecoilState(authState);
  const [, setLocation] = useBrowserLocation();

  const onSubmit = (data: LoginData) => {
    setIsLoading(true);

    AuthApiService.getTokens(data.username, data.password)
      .then((accessToken: string) => {
        const auth = { accessToken };
        setAuth(auth);
        AuthCacheService.saveAuth(auth);
        setLocation("/tasks");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form
      className="grow flex flex-col space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grow space-y-4">
        <label className="form-control">
          <div className="label">
            <span className="label-text">Username</span>
          </div>
          <input
            type="text"
            className="input input-bordered rounded-full"
            autoFocus
            {...register("username")}
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            className="input input-bordered rounded-full"
            autoFocus
            {...register("password")}
          />
        </label>
      </div>
      <HorizontalWrapper>
        <button
          type="submit"
          className="btn btn-primary btn-block rounded-full"
        >
          Log In
          {isLoading && <span className="loading loading-spinner" />}
        </button>
      </HorizontalWrapper>
    </form>
  );
};

export default LoginForm;
