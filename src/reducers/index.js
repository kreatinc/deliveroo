import { combineReducers } from "@reduxjs/toolkit";
import createList, * as fromCreateList from "./createList";
import byId, * as fromById from "./byId";
import shoppingList, * as fromShoppingList from "./shoppingList";
import likesList, * as fromLikesList from "./likesList";
import commentsList, * as fromCommentsList from "./commentsList";
import convertStringToArray from "utils/convertStringToArray";
import pagination, * as fromPagination from "./pagination";
import categoriesList, * as fromCategoriesList from "./categoriesList";

const idsByCategory = combineReducers({
  tortya: createList("tortya"),
  cakes: createList("cakes"),
  tacos: createList("tacos"),
  croissant: createList("croissant"),
  pizza: createList("pizza"),
  others: createList("others"),
});

const rootReducer = combineReducers({
  byId,
  idsByCategory,
  shoppingList,
  likesList,
  commentsList,
  categoriesList,
  pagination,
});

export default rootReducer;

/* later we'll add a new reducer named 'productsByFilter' by which we will filter the products by the category
and we'll create a list for each category
*/

export const getVisibleProducts = (state, category) => {
  if (category !== undefined) {
    const ids = fromCreateList.getProductsIds(state.idsByCategory[category]);
    return ids.map((id) => fromById.getProduct(state.byId, id));
  }
  return [];
};

export const getVisibleProduct = (state, id) => {
  const product = fromById.getProduct(state.byId, id);
  if (product) return product;
  return undefined;
};

export const getIsFetching = (state, category) => {
  if (category) {
    return fromCreateList.getIsFetching(state.idsByCategory[category]);
  }
  return;
};

export const getErrorMessage = (state, category) => {
  if (category) {
    return fromCreateList.getErrorMessage(state.idsByCategory[category]);
  }
  return;
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

export const getCategories = (state) => {
  return fromCategoriesList.getCategories(state.categoriesList);
};
