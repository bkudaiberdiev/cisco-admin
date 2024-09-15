import axios from "axios";

export const instance = axios.create({
  baseURL: "http://51.20.105.163/api/v1/",
});

export const generateHeaders = () => {
  const token = localStorage.getItem("access");
  return {
    Authorization: `Bearer ${token}`,
  };
};
