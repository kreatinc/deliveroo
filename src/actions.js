import * as recipeServices from "./services/recipeServices";

const fetchProducts = () => (dispatch) => {
  dispatch(fetchRecipesRequest());
  return recipeServices.fetchRecipes().then(
    (response) => dispatch(receiveRecipes(response)),
    (error) => dispatch(fetchRecipesFailure())
  );
};

const fetchRecipesRequest = () => {
  return {
    type: "FETCH_RECIPES_REQUEST",
  };
};

const fetchRecipesFailure = () => {
  return {
    type: "FETCH_RECIPES_FAILURE",
  };
};

const receiveRecipes = (response) => {
  return {
    type: "FETCH_RECIPES_SUCCESS",
    response,
  };
};

export {
  fetchProducts,
  receiveRecipes,
  fetchRecipesFailure,
  fetchRecipesRequest,
};
