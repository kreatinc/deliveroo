import apiClient from "./apiClient";

const fetchProducts = (paginationLink, category) => {
  if (paginationLink !== null) {
    const res = paginationLink?.replace("http://localhost:8000/api", "");
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
  const req = JSON.stringify({
    command: command,
  });
  return apiClient.post(`clients/commands`, req);
};

const getCommands = () => {
  return apiClient.get("clients/commands");
};

const getCommand = (commandGroupId) => {
  return apiClient.get(`clients/commands/${commandGroupId}`);
};

const getRunOutProducts = () => apiClient.get("/companies/products/runout");

export {
  fetchProducts,
  fetchProduct,
  fetchCategories,
  searchProduct,
  likeProduct,
  unlikeProduct,
  sendCommand,
  getCommands,
  getCommand,
  getRunOutProducts,
};
