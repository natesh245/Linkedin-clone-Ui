import axios from "axios";

import { logOutUser } from "../features/user/userSlice";
const user = JSON.parse(localStorage.getItem("user"));

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",

  headers: { Authorization: user?.token },
});

export const interceptors = (store) => {
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
