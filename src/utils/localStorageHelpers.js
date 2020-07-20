import { v4 } from "uuid";

const getShoppingList = () => {
  try {
    const res = JSON.parse(localStorage.getItem("shoppingList"));
    return res;
  } catch (error) {
    console.log("there was an error dealing with the shopping list");
  }
};

const removeItemFromShoppingList = (id) => {
  try {
    return JSON.parse(localStorage.getItem(id));
  } catch (error) {
    console.log("there was an error while removing the item from the list");
  }
};

const addToShoppingList = (item) => {
  const id = v4();
  try {
    const items = getShoppingList();
    const newShoppingList = { ...items, [id]: item };
    localStorage.setItem("shoppingList", JSON.stringify(newShoppingList));
    return getShoppingList();
  } catch (error) {
    console.log("there was an error while accessing localStorage");
  }
};

export { getShoppingList, addToShoppingList, removeItemFromShoppingList };
