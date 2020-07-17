import * as recipeServices from "./services/recipeServices";
import { normalize } from "normalizr";
import { arrayOfProducts } from "./utils/schema";

const fetchProducts = () => (dispatch) => {
  dispatch(fetchRecipesRequest());
  return recipeServices.fetchRecipes().then(
    (response) => dispatch(receiveRecipes(response)),
    (error) => dispatch(fetchRecipesFailure(error))
  );
};

const fetchRecipesRequest = () => {
  return {
    type: "FETCH_PRODUCTS_REQUEST",
  };
};

const fetchRecipesFailure = (error) => {
  return {
    type: "FETCH_PRODUCTS_FAILURE",
    message: error.message || "There was an error while fetching the products",
  };
};

const receiveRecipes = (response) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    response: normalize(response.data.data, arrayOfProducts),
  };
};

export {
  fetchProducts,
  receiveRecipes,
  fetchRecipesFailure,
  fetchRecipesRequest,
};
