import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",

  headers: { Authorization: user?.token },
});

export default axiosInstance;
