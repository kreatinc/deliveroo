import apiClient from "./apiClient";

const fetchProducts = (link) => {
  console.log("the link is :", link);
  if (link !== null) {
    const res = link.replace("http://localhost:8000/api", "");
    console.log("the res is the following :", res);
    return apiClient.get(res);
  }
  return apiClient.get("/products");
};

const fetchProduct = (productId) => {
  return apiClient.get(`/products/${productId}`);
};

export { fetchProducts, fetchProduct };
