import axios from "axios";
import { promise } from "zod";

const baseURL = "https://node-course-2rz5.onrender.com";
export const publicInstance = axios.create({ baseURL });

export const privateInstance = axios.create({ baseURL });

privateInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => promise.reject(error),
);