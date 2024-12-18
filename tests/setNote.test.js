const {registerUser} = require('../server/controllers/userController');
import axios from "axios";
let AxiosInstance = axios.create({
  //set PORT to the port your API uses
  baseURL: "http://localhost:5000/api/",
  timeout: 5000,
});
// AxiosInstance.interceptors.request.use(function (config) {
//   let token = localStorage.getItem("token");
//   config.headers["Authorization"] = "Bearer " + token;
//   return config;
// });

const url =  "http://localhost:5000/api/" + "users/";


const DTO = {
  name: "Johns",
  email: "johns@mail.com",
  password: "johnny"
}
axios.post(url,DTO).then((res) => console.log(res));



test('test', () => {
  expect(1===1);
});