import { combineReducers } from "@reduxjs/toolkit";

const ids = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return action.response.result;
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case "FETCH_TODOS_REQUEST":
      return true;
    case "FETCH_TODOS_SUCCESS":
    case "FETCH_TODOS_FAILURE":
      return false;
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case "FETCH_TODOS_FAILURE":
      return action.message;
    case "FETCH_TODOS_REQUEST":
    case "FETCH_TODOS_SUCCESS":
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  ids,
  isFetching,
  errorMessage,
});

export const getProductsIds = (state) => state.ids;
