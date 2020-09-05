import apiClient from "services/apiClient";

const login = ({ email, password }) => {
  return apiClient.post("companies/login", JSON.stringify({ email, password }));
};

const register = ({ firstName, phone, email, password }) => {
  return apiClient.post(
    "companies/register",
    JSON.stringify({ firstName, phone, email, password })
  );
};

const logout = () => {
  return apiClient.post("companies/logout");
};

const getLikedProducts = () => {
  return apiClient.get("companies/profile");
};

const updatePassword = (oldPassword, newPassword, confirmation) => {
  return apiClient.patch(
    "/companies/password",
    JSON.stringify({
      old_password: oldPassword,
      new_password: newPassword,
      new_password_confirmation: confirmation,
    })
  );
};

const updatecompanyInformation = (informations) => {
  return apiClient.patch("companies/profile", JSON.stringify(informations));
};

const getCommands = () => {
  return apiClient.get("companies/commands");
};

const getCommand = (commandGroupId) => {
  return apiClient.get(`companies/commands/${commandGroupId}`);
};

const getProducts = () => apiClient.get("companies/products");

export {
  login,
  register,
  logout,
  getLikedProducts,
  updatePassword,
  updatecompanyInformation,
  getCommands,
  getCommand,
  getProducts,
};
