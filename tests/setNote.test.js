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

const url =  "http://localhost:5000/api/";


const DTO = {
  name: "John",
  email: "john@mail.com",
  password: "johnny"
}

describe('User operations test', () => {

  test('Registering a User', async () => {
    const existsMessage = 'User already exists';
    await axios.post(url + "users/",DTO)
    .then((res) => expect(res.status).toBe(201))
    .catch((err) => {
      if (err.response) {
        expect(err.response.data.message).toBe(existsMessage);
      }
    });
  });

  test('User logs in', async () => {
    var status;
    await axios.post(url + "users/login",{email:DTO.email,password: DTO.password})
    .then((res) => {status = res.status})
    .catch((err) => {
      if(err.response) {
        status = err.response.status;
      }
    });
    expect(status).toBe(201);
  });

});
