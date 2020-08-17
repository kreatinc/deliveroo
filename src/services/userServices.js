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
const removeComment = (commentId) => {
  return apiClient.delete(`clients/comments/${commentId}`);
};

const editComment = (comment, commentId) => {
  return apiClient.patch(
    `clients/comments/${commentId}`,
    JSON.stringify({ comment, product_id: commentId })
  );
};

const updatePassword = (oldPassword, newPassword) => {
  return apiClient.patch(
    "/clients/password",
    JSON.stringify({ old_password: oldPassword, new_password: newPassword })
  );
};

// const updateUserInformation = () => {
//   return apiClient.patch("clients/profile",JSON.stringify())
// }

export {
  userLogin,
  userRegister,
  userLogout,
  getLikedProducts,
  addComment,
  removeComment,
  editComment,
  updatePassword,
};
