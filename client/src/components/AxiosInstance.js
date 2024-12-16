import axios from "axios";
// created instance with preset url
let AxiosInstance = axios.create({
  //set PORT to the port your API uses
  baseURL: "http://localhost:5000/api/",
  timeout: 5000,
});
// axios instance allows for pre authorized axios requests
AxiosInstance.interceptors.request.use(function (config) {
  let token = localStorage.getItem("token");
  config.headers["Authorization"] = "Bearer " + token;
  return config;
});

export default AxiosInstance;