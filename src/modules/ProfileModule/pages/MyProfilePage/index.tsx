import { useSetRecoilState } from "recoil";
import AuthCacheService from "../../../AuthModule/services/cache";
import HorizontalWrapper from "../../../TaskModule/components/HorizontalWrapper";
import { authState } from "../../../AuthModule/store";
import { useBrowserLocation } from "wouter/use-browser-location";
import Heading from "../../../Shared/components/Heading";

const MyProfilePage = () => {
  const setAuth = useSetRecoilState(authState);
  const [, setLocation] = useBrowserLocation();

  const handleLogout = () => {
    setAuth(null);
    AuthCacheService.clearAuth();
    setLocation("/");
  };

  return (
    <div className="grow flex flex-col justify-between">
      <HorizontalWrapper>
        <Heading>My Profile</Heading>
      </HorizontalWrapper>
      <HorizontalWrapper>
        <button
          className="btn btn-block rounded-full"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </HorizontalWrapper>
    </div>
  );
};

export default MyProfilePage;
