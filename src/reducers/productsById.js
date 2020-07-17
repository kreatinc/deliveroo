const productsById = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.products,
    };
  }
  return state;
};

export default productsById;

export const getProduct = (state, id) => state[id];
