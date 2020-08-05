import apiClient from "services/apiClient";

const userLogin = ({ email, password }) => {
  return apiClient.post("/login", JSON.stringify({ email, password }));
};

export { userLogin };
