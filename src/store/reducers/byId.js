import convertStringToArray from "../../utils/convertStringToArray";
const byId = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
    case "FETCH_PRODUCT_SUCCESS":
      return { ...state, ...action.response.entities.products };
    case "REMOVE_PRODUCT":
      console.log("i am here");
      const nextState = Object.keys(state).filter((key) => key !== action.id);
      return { ...nextState };
    case "REMOVE_INGREDIENT":
      return {
        ...state,
        [action.productId]: handleRemoveIngredient(
          state[action.productId],
          action
        ),
      };
    default:
      return state;
  }
};

const handleRemoveIngredient = (state, action) => {
  const newRecipe = convertStringToArray(state.recipe).filter(
    (Ingredient) => Ingredient !== action.ingredient
  );
  return {
    ...state,
    recipe: newRecipe,
  };
};

export default byId;

export const getProduct = (state, id) => state[id];
