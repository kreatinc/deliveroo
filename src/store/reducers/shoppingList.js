import {
  getShoppingList,
  addToShoppingList,
  removeItemFromShoppingList,
} from "utils/localStorageHelpers";

const shoppingList = (state = {}, action) => {
  switch (action.type) {
    case "GET_LIST_ITEMS":
      return getShoppingList();
    case "GET_LIST_ITEM_FAILURE":
      return state;
    case "ADD_LIST_ITEM":
      return addToShoppingList(action.product);
    case "REMOVE_LIST_ITEM":
      return removeItemFromShoppingList(action.id);
    default:
      return state;
  }
};

export default shoppingList;

export const getShoppingListItems = (state) => {
  if (state) {
    const keys = Object.keys(state);
    return keys.map((key) => ({ key, details: state[key] }));
  }
};
