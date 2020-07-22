import apiClient from "./apiClient";

const fetchProducts = () => {
  return apiClient.get("/products");
};

const fetchProduct = (productId) => {
  return apiClient.get(`/products/${productId}`);
};

export { fetchProducts, fetchProduct };
