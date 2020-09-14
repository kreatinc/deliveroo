import apiClient from "services/apiClient";

const login = ({ email, password }) => {
  return apiClient.post("companies/login", JSON.stringify({ email, password }));
};

const register = ({
  firstName,
  phone,
  email,
  address,
  description,
  password,
  passwordConfirmation,
}) => {
  return apiClient.post(
    "companies/register",
    JSON.stringify({
      title: firstName,
      phone,
      address,
      email,
      description,
      password,
      password_confirmation: passwordConfirmation,
    })
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

const addProduct = (product) => {
  const _product = {
    title: product.title,
    recipe: product.recipe,
    price: product.price,
    quantity: product.quantity,
    category_id: product.category,
    description: product.description,
  };
  console.log("the product is : ", _product);
  return apiClient.post("companies/products", JSON.stringify(_product));
};
const editProduct = (product) => {
  const _product = {
    title: product.title,
    recipe: product.recipe,
    price: product.price,
    quantity: product.quantity,
    category_id: product.category,
    description: product.description,
  };
  return apiClient.patch(
    `companies/products/${product.id}`,
    JSON.stringify(_product)
  );
};
const removeProduct = (product) => {
  console.log("the product is : ", product);
  const _product = {
    title: product.title,
    recipe: product.recipe,
    price: product.price,
    quantity: product.quantity,
    category_id: product.category,
    description: product.description,
  };
  return apiClient.delete(
    `companies/products/${product.id}`,
    JSON.stringify(_product)
  );
};

const fetchCategories = () => {
  return apiClient.get("/categories");
};

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
  addProduct,
  fetchCategories,
  editProduct,
  removeProduct,
};
