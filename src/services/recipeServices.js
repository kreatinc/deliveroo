import apiClient from "./apiClient";

const fetchRecipes = () => {
  return apiClient.get("/products");
};

export { fetchRecipes };
