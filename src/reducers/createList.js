import { combineReducers } from "@reduxjs/toolkit";

const createList = (filter) => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case "FETCH_PRODUCTS_SUCCESS":
        return filter === action.filter ? action.response.result : state;
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) return state;
    switch (action.type) {
      case "FETCH_PRODUCTS_REQUEST":
        return true;
      case "FETCH_PRODUCTS_SUCCESS":
      case "FETCH_PRODUCTS_FAILURE":
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    if (action.filter !== filter) return state;
    switch (action.type) {
      case "FETCH_PRODUCTS_FAILURE":
        return action.message;
      case "FETCH_PRODUCTS_REQUEST":
      case "FETCH_PRODUCTS_SUCCESS":
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
    errorMessage,
  });
};

export default createList;

export const getProductsIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
