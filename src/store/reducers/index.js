import { combineReducers } from "@reduxjs/toolkit";
import createList, * as fromCreateList from "./createList";
import byId, * as fromById from "./byId";
import shoppingList, * as fromShoppingList from "./shoppingList";
import likesList, * as fromLikesList from "./likesList";
import commentsList, * as fromCommentsList from "./commentsList";
import convertStringToArray from "utils/convertStringToArray";
import pagination, * as fromPagination from "./pagination";
import categoriesList, * as fromCategoriesList from "./categoriesList";
import searchResultsList, * as fromSearchResultsList from "./searchResultsList";
import user, * as fromUser from "./user";
import commandsList, * as fromCommandsList from "./commandsList";
import notifications, * as fromNotifications from "./notifications";
import company, * as fromCompany from "./company";

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
  commandsList,
  categoriesList,
  pagination,
  searchResultsList,
  notifications,
  user,
  company,
});

export default rootReducer;

export const getVisibleProducts = (state, category = "others") => {
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
  return fromLikesList.getLikedListItems(state.likesList.likes);
};

export const getIsProductLiked = (state, id) => {
  return fromLikesList.getIsProductLiked(state.likesList.likes, id);
};

export const getIsFetchingLike = (state) => {
  return fromLikesList.getIsFetchingLike(state.likesList.isFetching);
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

export const getSearchResults = (state) => {
  const ids = fromSearchResultsList.getResultsIds(
    state.searchResultsList.searchResults
  );

  if (ids) {
    return ids.map((id) =>
      fromSearchResultsList.getResult(state.searchResultsList.searchResults, id)
    );
  }
  return undefined;
};

export const getIsSearching = (state) => {
  return fromSearchResultsList.getIsSearching(
    state.searchResultsList.isSearching
  );
};

export const getCurrentUser = (state) => {
  return fromUser.getUser(state.user);
};

export const getCommands = (state) => {
  return fromCommandsList.getCommands(state.commandsList.commands);
};

export const getIsFetchingCommands = (state) => {
  return fromCommandsList.getIsFetchingCommands(state.commandsList.isFetching);
};

export const getNotifications = (state) => {
  return fromNotifications.getNotifications(state.notifications);
};

export const getComments = (state) =>
  fromCommentsList.getCompanyComments(state.commentsList);

export const getLatestCommands = (state) =>
  fromCommandsList.getLatestCommands(state.commandsList.commands);
