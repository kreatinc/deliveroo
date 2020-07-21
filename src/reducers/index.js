import { combineReducers } from "@reduxjs/toolkit";
import createList, * as fromCreateList from "./createList";
import byId, * as fromById from "./byId";
import shoppingList, * as fromShoppingList from "./shoppingList";
import likesList, * as fromLikesList from "./likesList";

const rootReducer = combineReducers({
  byId,
  createList,
  shoppingList,
  likesList,
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

export const getShoppingList = (state) => {
  return fromShoppingList.getShoppingListItems(state.shoppingList);
};

export const getLikedProducts = (state) => {
  return fromLikesList.getLikedListItems(state.likesList);
};

export const getIsProductLiked = (state, id) => {
  return fromLikesList.isProductLiked(state.likesList, id);
};
