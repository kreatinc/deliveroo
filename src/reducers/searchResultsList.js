import { combineReducers } from "@reduxjs/toolkit";

const searchResults = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SEARCH_PRODUCTS_SUCCESS":
      return action.response;
    case "FETCH_SEARCH_PRODUCTS_FAILURE":
      return action.message;
    default:
      return state;
  }
};

const isSearching = (state = false, action) => {
  switch (action.type) {
    case "FETCH_SEARCH_PRODUCTS_REQUEST":
      return true;
    case "FETCH_SEARCH_PRODUCTS_SUCCESS":
    case "FETCH_SEARCH_PRODUCTS_FAILURE":
    case "CLEAR_SEARCH_RESULTS":
      return false;
    default:
      return state;
  }
};

const searchResultsList = combineReducers({ searchResults, isSearching });

export default searchResultsList;

export const getResultsIds = (state) => {
  return state.result;
};
export const getResult = (state, id) => {
  return state.entities.products[id];
};
export const getIsSearching = (state) => state;
