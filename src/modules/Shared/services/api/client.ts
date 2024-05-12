import axios, { AxiosError, AxiosResponse } from "axios";
import AuthCacheService from "../../../AuthModule/services/cache";

const client = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

client.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      AuthCacheService.clearAuth();
      window.location.replace("/auth/login");
    }

    return Promise.reject(error);
  },
);

export default client;
