const comments = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return retrieveCommentsFromProductst(state, action);
    default:
      return state;
  }
};

const retrieveCommentsFromProductst = (state, action) => {
  const products = action.response.entities.products;
  const productIds = action.response.result;
  return productIds.map((id) => ({
    // to be replaced with comments
    [id]: products[id].likes,
  }));
};

export default comments;

export const getComments = (state, productId) => {
  return state[productId];
};
