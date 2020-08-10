import { product } from "utils/schema";

const comments = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      const res = retrieveComments(state, action);
      return res;
    case "ADD_COMMENT":
      console.log(action.response);
      return { ...state, [action.productId]: [action.response] };

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
