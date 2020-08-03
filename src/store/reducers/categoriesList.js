const categoriesList = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES_SUCCESS":
      return action.response;
    default:
      return state;
  }
};

export default categoriesList;

export const getCategories = (state) => {
  return state.map((category) => category);
};
