const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.products,
    };
  }
  return state;
};

export default byId;

export const getProduct = (state, id) => state[id];
