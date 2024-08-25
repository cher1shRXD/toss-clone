import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import tokenStore from "../../store/tokenStore";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

const instance = axios.create({
  baseURL: "http://dgsw-local.mcv.kr:8080",
  headers: {
    Accept: "*/*",
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  async (config) => {
    const { accessToken } = tokenStore.getState();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { refreshToken, setAccessToken, setRefreshToken } =
      tokenStore.getState();
    const originalRequest = error.config as CustomAxiosRequestConfig;

    if (originalRequest.data instanceof FormData) {
      originalRequest.headers["Content-Type"] = "multipart/form-data";
    } else {
      originalRequest.headers["Content-Type"] = "application/json";
    }
    if (originalRequest && !originalRequest._retry) {
      originalRequest._retry = true;
      if (refreshToken) {
        axios
          .post(`http://dgsw-local.mcv.kr/auth/reissue`, {
            refreshToken,
          })
          .then((response) => {
            const newAccessToken = response.data.accessToken;
            const newRefreshToken = response.data.refreshToken;

            setAccessToken(newAccessToken);
            setRefreshToken(newRefreshToken);

            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return instance(originalRequest);
          })
          .catch((refreshError) => {
            return Promise.reject(refreshError);
          });
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
