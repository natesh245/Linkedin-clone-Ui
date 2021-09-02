import axios from "axios";

import { logOutUser } from "../features/user/userSlice";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const interceptors = (store) => {
  axiosInstance.interceptors.request.use(function (config) {
    const token = store.getState().user?.user?.token;
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  });
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.data) {
        if (error.response.status === 401) {
          store.dispatch(logOutUser());
        }
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error.message);
    }
  );
};

export default axiosInstance;
