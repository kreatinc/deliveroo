import axios from "axios";
import store from "../index";

const BASE_URL = "https://deliver-me-api.herokuapp.com/api";

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: { Accept: "application/json", "Content-Type": "application/json", "Access-Control-Allow-Origin": "*"},
});
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 403) {
      return Promise.reject(error.response.data.error);
    }
    if (error.response.status === 401) {
      store.dispatch({ type: "USER_LOGOUT_SUCCESS" });
      window.location.replace("/login");
      return Promise.reject(error);
    }
  }
);

export default apiClient;
