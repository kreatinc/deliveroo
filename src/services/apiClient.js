import axios from "axios";
import { getUser } from "utils/localStorageHelpers";

const BASE_URL = "http://127.0.0.1:8000/api/";
const token = getUser()?.token ?? "";

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

apiClient.interceptors.request.use((config) => {
  if (token !== undefined) {
    console.log("the token is :", token);
    config.headers.common["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // if (error.response.status === 403) {
    //   return Promise.reject(error.response.data.error);
    // }
    // if (error.response.status === 401) {
    //   return Promise.reject(error);
    // }
  }
);

export default apiClient;
