import convertStringToArray from "../utils/convertStringToArray";
const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.products,
    };
  }
  if (action.type === "REMOVE_INGREDIENT") {
    console.log("the state inside of the reducer is :", state);
    return {
      ...state,
      [action.productId]: handleRemoveIngredient(
        state[action.productId],
        action
      ),
    };
  }
  return state;
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
