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

const Box = (x) => ({
  map: (f) => Box(f(x)),
  fold: (f) => f(x),
});

/*
 * the reason data is distructured this way is because
 * is normalized to come in this shape using normalizer lib
 */
const getItems = (itemsIds, items) => itemsIds.map((id) => items[id]);

const getItemFromItems = (items, item) =>
  items.reduce(
    (acc, curr) => Object.assign(acc, { [curr.id]: curr[item] }),
    {}
  );

const retrieveComments = (state, action) =>
  Box(action)
    .map((action) => ({
      productIds: action.response.result,
      products: action.response.entities.products,
    }))
    .map(({ productIds, products }) => getItems(productIds, products))
    .map((products) => getItemFromItems(products, "comments"))
    .fold((x) => ({ ...state, ...x }));

export default comments;

export const getComments = (state, productId) => {
  return state[productId];
};
