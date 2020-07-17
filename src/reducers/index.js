import { combineReducers } from "@reduxjs/toolkit";
import createList, * as fromCreateList from "./createList";
import productsById, * as fromProductsById from "./productsById";
import companiesById from "./companiesById";

const rootReducer = combineReducers({
  productsById,
  companiesById,
  createList,
});

export default rootReducer;

export const getVisibleProducts = (state) => {
  return state;
};
