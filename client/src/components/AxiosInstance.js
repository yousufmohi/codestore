import axios from "axios";

let AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/",
  timeout: 5000,
});

AxiosInstance.interceptors.request.use(function (config) {
  let token = localStorage.getItem("token");
  config.headers["Authorization"] = "Bearer " + token;
  return config;
});

export default AxiosInstance;