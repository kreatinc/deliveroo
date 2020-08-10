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

const userLogout = () => {
  return apiClient.post("clients/logout");
};

const getLikedProducts = () => {
  return apiClient.get("clients/profile");
};

const addComment = (comment, productId) => {
  return apiClient.post(
    `clients/comments/${productId}`,
    JSON.stringify({ comment, product_id: productId })
  );
};

export { userLogin, userRegister, userLogout, getLikedProducts, addComment };
