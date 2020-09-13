import apiClient from "services/apiClient";

const login = ({ email, password }) => {
  return apiClient.post("clients/login", JSON.stringify({ email, password }));
};

const register = ({
  firstName,
  phone,
  email,
  address,
  password,
  passwordConfirmation,
}) => {
  return apiClient.post(
    "clients/register",
    JSON.stringify({
      name: firstName,
      phone,
      email,
      address,
      password,
      password_confirmation: passwordConfirmation,
    })
  );
};

const logout = () => {
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

const updatePassword = (oldPassword, newPassword, confirmation) => {
  return apiClient.patch(
    "/clients/password",
    JSON.stringify({
      old_password: oldPassword,
      new_password: newPassword,
      new_password_confirmation: confirmation,
    })
  );
};

const updateUserInformation = (informations) => {
  return apiClient.patch("clients/profile", JSON.stringify(informations));
};

export {
  login,
  register,
  logout,
  getLikedProducts,
  addComment,
  removeComment,
  editComment,
  updatePassword,
  updateUserInformation,
};
