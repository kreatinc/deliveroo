const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_RECIPES_SUCCESS":
      return {
        ...state,
        ...action.response.data.data,
      };
    case "FETCH_RECIPES_FAILURE":
      console.log("failed to fetch recipes");
      return state;
    case "FETCH_RECIPES_REQUEST":
      console.log("fetching recipes");
  }
  return state;
};
export default rootReducer;

export const getVisibleTodos = (state) => {
  return state;
};
