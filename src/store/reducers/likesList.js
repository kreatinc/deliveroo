import { product } from "utils/schema";

const LikesList = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TO_LIKE_LIST":
      return { ...state, [action.response.id]: action.response };
    case "REMOVE_FROM_LIKE_LIST":
      return state.filter((product) => product.id !== action.response.id);
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
  console.log("the id type is : ", typeof id);
  const likes = Array.from(state).filter((product) => {
    return product.id === +id;
  });
  return likes.length > 0 ? true : false;
};
