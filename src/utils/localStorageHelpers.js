import { v4 } from "uuid";
const getUser = () => {
  try {
    const res = JSON.parse(localStorage.getItem("user"));
    return res;
  } catch (error) {
    console.log("there was an error while getting the logged user");
  }
  localStorage.getItem("user");
};
const setUser = ({ email, name, token }) => {
  try {
    localStorage.setItem(
      "user",
      JSON.stringify({
        email,
        name,
        token,
      })
    );
    return getUser();
  } catch {
    console.log("there was an error while trying to save the logged user");
  }
};

const removeUser = () => {
  try {
    localStorage.removeItem("user");
    return {};
  } catch (error) {
    console.log("there was a problem while trying to remove the logged user");
  }
};

const getShoppingList = () => {
  try {
    const res = JSON.parse(localStorage.getItem("shoppingList"));
    return res;
  } catch (error) {
    console.log("there was an error dealing with the shopping list");
  }
};

const removeItemFromShoppingList = (id) => {
  console.log("the id of the product is ", id);
  try {
    const shoppingList = getShoppingList();
    delete shoppingList[`${id}`];
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
    return getShoppingList();
  } catch (error) {
    console.log("there was an error while removing the item from the list");
  }
};

const addToShoppingList = (product) => {
  const id = v4();
  try {
    const products = getShoppingList();
    const newShoppingList = { ...products, [id]: product };
    localStorage.setItem("shoppingList", JSON.stringify(newShoppingList));
    return getShoppingList();
  } catch (error) {
    console.log("there was an error while accessing localStorage");
  }
};

const getLikedProducts = () => {
  try {
    const res = JSON.parse(localStorage.getItem("likesList"));
    return res;
  } catch (error) {
    console.log("there was an error while getting from likes list");
  }
};

const addToLikeList = (item) => {
  try {
    const items = getLikedProducts();
    const newLikesList = { ...items, [item.id]: item };
    localStorage.setItem("likesList", JSON.stringify(newLikesList));
    return getLikedProducts();
  } catch (error) {
    console.log("there was an error while adding to the likes list");
  }
};

export {
  getShoppingList,
  addToShoppingList,
  removeItemFromShoppingList,
  getLikedProducts,
  addToLikeList,
  setUser,
  removeUser,
  getUser,
};
