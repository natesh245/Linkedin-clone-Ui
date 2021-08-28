import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",

  headers: { Authorization: user?.token },
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status >= 400) {
      console.log(response);
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

export default axiosInstance;
