import { apiLuxx } from "./api";

export const PostApi = (URL, dados) => {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache",
    },
  };
  return apiLuxx.post(URL, JSON.stringify(dados), defaultOptions);
};


export const GetApi = (URL) => {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache",
    },
  };
  return apiLuxx.get(URL, defaultOptions);
};
