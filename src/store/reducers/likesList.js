const LikesList = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TO_LIKE_LIST":
    // TODO: add to like list logic
    case "REMOVE_FROM_LIKE_LIST":
      return state.filter(
        (product) => product.id !== action.response.product.id
      );
    case "GET_LIKE_LIST_SUCCESS":
      return action.response;
    case "GET_LIKE_LIST_REQUEST":
      console.log("requesting");
    case "GET_LIKE_LIST_FAILURE":
      return state;

    default:
      return state;
  }
};

export default LikesList;

export const getLikedListItems = (state) => {
  if (state) {
    const keys = Object.keys(state);
    return keys.map((key) => ({ key, details: state[key] }));
  }
};

export const isProductLiked = (state, id) => {
  if (state) return state[id] !== undefined ? true : false;
};
