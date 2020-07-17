const companiesById = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.products,
    };
  }
  return state;
};

export default companiesById;

export const getCompany = (state, id) => state[id];
