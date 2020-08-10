import { product } from "utils/schema";

const comments = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return retrieveComments(state, action);
    case "ADD_COMMENT":
      return {
        ...state,
        [action.productId]: [...state[action.productId], action.response],
      };

    case "REMOVE_COMMENT":
    case "EDIT_COMMENT":
    default:
      return state;
  }
};

const retrieveComments = (state, action) => {
  const productIds = action.response.result;
  const products = action.response.entities.products;

  const nextState = {
    ...state,
  };

  productIds.forEach((id) => {
    nextState[id] = products[id].comments;
  });

  return nextState;
};

export default comments;

export const getComments = (state, productId) => {
  return state[productId];
};
