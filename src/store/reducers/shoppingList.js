import {
  getShoppingList,
  addToShoppingList,
  removeProductFromShoppingList,
  removeShoppingList,
} from "utils/localStorageHelpers";

const shoppingList = (state = {}, action) => {
  switch (action.type) {
    case "GET_LIST_ITEMS":
      return getShoppingList();
    case "GET_LIST_ITEM_FAILURE":
      return state;
    case "ADD_LIST_ITEM":
      return addToShoppingList(action.product, action.quantity);
    case "REMOVE_LIST_ITEM":
      return removeProductFromShoppingList(action.id);
    case "CLEAR_SHOOPING_LIST":
      return removeShoppingList();
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
