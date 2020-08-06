import apiClient from "services/apiClient";

const userLogin = ({ email, password }) => {
  return apiClient.post("clients/login", JSON.stringify({ email, password }));
};

const userRegister = ({ firstName, phone, email, password }) => {
  return apiClient.post(
    "clients/register",
    JSON.stringify({ firstName, phone, email, password })
  );
};

export { userLogin, userRegister };
