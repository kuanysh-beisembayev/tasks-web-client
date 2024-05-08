import { Auth } from "../../types";

class AuthCacheService {
  static saveAuth(auth: Auth) {
    localStorage.setItem("auth:tokens", JSON.stringify(auth));
  }

  static getAuth(): Auth | null {
    const auth = localStorage.getItem("auth:tokens");

    if (auth) {
      return JSON.parse(auth);
    }

    return null;
  }

  static clearAuth() {
    localStorage.removeItem("auth:tokens");
  }
}

export default AuthCacheService;
