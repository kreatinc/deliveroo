import apiClient from "./apiClient";

const fetchProducts = (link, category) => {
  console.log("the link is :", link);
  console.log("the category is :", category);
  console.log("the link is :", link);
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

export { fetchProducts, fetchProduct, fetchCategories };
