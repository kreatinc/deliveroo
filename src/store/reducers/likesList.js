import { combineReducers } from "@reduxjs/toolkit";

const likes = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_LIKE_LIST":
      return [...state, action.response];
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

const isFetching = (state = false, action) => {
  switch (action.type) {
    case "LIKE_REQUEST":
      return true;
    case "LIKE_SUCCESS":
    case "LIKE_FAILURE":
      return false;
    default:
      return state;
  }
};

export default combineReducers({ isFetching, likes });

export const getLikedListItems = (state) => {
  if (state) {
    const keys = Object.keys(state);
    return keys.map((key) => ({ key, details: state[key] }));
  }
};

export const getIsProductLiked = (state, id) => {
  const likes = Array.from(state).filter((product) => {
    return product.id === +id;
  });
  return likes.length > 0 ? true : false;
};

export const getIsFetchingLike = (state) => state;
