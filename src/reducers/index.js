import { combineReducers } from "@reduxjs/toolkit";
import createList, * as fromCreateList from "./createList";
import byId, * as fromById from "./byId";
import shoppingList, * as fromShoppingList from "./shoppingList";
import likesList, * as fromLikesList from "./likesList";
import commentsList, * as fromCommentsList from "./commentsList";
import convertStringToArray from "utils/convertStringToArray";
import pagination, * as fromPagination from "./pagination";

const rootReducer = combineReducers({
  byId,
  createList,
  shoppingList,
  likesList,
  commentsList,
  pagination,
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

export const getProductIngredients = (state, id) => {
  const product = fromById.getProduct(state.byId, id);
  if (product) {
    return convertStringToArray(product.recipe);
  }
};
export const getLikes = (state, id) => {
  const product = fromById.getProduct(state.byId, id);
  if (product) {
    return product.likes;
  }
};

export const getProductComments = (state, id) => {
  const product = fromById.getProduct(state.byId, id);
  if (product) {
    return fromCommentsList.getComments(state.commentsList, product.id);
  }
};

export const getPaginationData = (state) => {
  return fromPagination.getPaginationData(state.pagination);
};
