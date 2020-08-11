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
      const newProductComments = state[action.productId].filter(
        (comment) => comment.id !== action.commentId
      );
      const nextState = {
        ...state,
        [action.productId]: newProductComments,
      };

      return nextState;

    case "EDIT_COMMENT":
      const productWithUpdatedComments = state[action.productId].map(
        (comment) => {
          if (comment.id === action.commentId) {
            comment = action.response;
          }
          return comment;
        }
      );

      return {
        ...state,
        [action.productId]: productWithUpdatedComments,
      };
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
