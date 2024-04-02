import axios from "axios";

export const apiLuxx = axios.create({
  baseURL: "https://localhost/8080/",
});

apiLuxx.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return error.response;
  }
);