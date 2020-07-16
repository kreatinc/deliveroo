import axios from "axios";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: false });

const BASE_URL = "http://127.0.0.1:8000/api/";
export const domainName = BASE_URL.replace("/api", "");

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
  headers: { "Content-Type": "application/json" },
});

//for more precision in the loading the nprogress bar is better moved inside navigation guards
apiClient.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    NProgress.done();
  }
);

export default apiClient;
