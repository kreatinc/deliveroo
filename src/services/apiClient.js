import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: { "Content-Type": "Application/json" },
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

export const setToken = (token) => {
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return;
};
