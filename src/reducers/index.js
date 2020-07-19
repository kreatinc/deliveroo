import { combineReducers } from "@reduxjs/toolkit";
import createList, * as fromCreateList from "./createList";
import byId, * as fromById from "./byId";

const rootReducer = combineReducers({
  byId,
  createList,
});

export default rootReducer;

/* later we'll add a new reducer named 'productsByFilter' by which we will filter the products by the category
and we'll create a list for each category
*/

export const getVisibleProducts = (state) => {
  const ids = fromCreateList.getProductsIds(state.createList);
  return ids.map((id) => fromById.getProduct(state.byId, id));
};

export const getVisibleProduct = (state, id) => {
  const product = fromById.getProduct(state.byId, id);
  if (product) return product;
  return "cannot find this product";
};

export const getIsFetching = (state) => {
  return fromCreateList.getIsFetching(state.createList);
};

export const getErrorMessage = (state) => {
  return fromCreateList.getErrorMessage(state.createList);
};
