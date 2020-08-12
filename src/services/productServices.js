import apiClient from "./apiClient";
//what does link mean 🤦🏻‍♂️
const fetchProducts = (link, category) => {
  if (link !== null) {
    const res = link.replace("http://localhost:8000/api", "");
    console.log("the res is the following :", res);
    return apiClient.get(res);
  }
  if (category) {
    return apiClient.get(`/categories/products/${category}`);
  }
  return apiClient.get("/products");
};

const fetchProduct = (productId) => {
  return apiClient.get(`/products/${productId}`);
};

const fetchCategories = () => {
  return apiClient.get("/categories");
};

const searchProduct = (productName) => {
  return apiClient.get(`/products?title=${productName}`);
};

const likeProduct = (productId) => {
  return apiClient.post(`clients/${productId}/like`);
};

const unlikeProduct = (productId) => {
  return apiClient.post(`clients/${productId}/unlike`);
};

const sendCommand = (command) => {
  return apiClient.post(`clients/commands`, JSON.stringify(command));
};

export {
  fetchProducts,
  fetchProduct,
  fetchCategories,
  searchProduct,
  likeProduct,
  unlikeProduct,
  sendCommand,
};
