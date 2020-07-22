import * as ProductServices from "./services/productServices";
import { normalize } from "normalizr";
import { arrayOfProducts } from "./utils/schema";

const fetchProducts = () => (dispatch) => {
  dispatch(fetchProductsRequest());
  return ProductServices.fetchProducts().then(
    (response) => dispatch(receiveProducts(response)),
    (error) => dispatch(fetchRecipesFailure(error))
  );
};

const fetchProduct = (productId) => (dispatch) => {
  dispatch(fetchProductRequest());
  return ProductServices.fetchProduct(productId).then((response) =>
    dispatch(receiveProduct(response), (error) =>
      dispatch(fetchProductFailure(error))
    )
  );
};

const receiveProduct = (response) => {
  return {
    type: "FETCH_PRODUCT_SUCCESS",
    response: normalize(response.data.data, arrayOfProducts),
  };
};

const fetchProductRequest = () => {
  return {
    type: "FETCH_PRODUCT_REQUEST",
  };
};
const fetchProductFailure = (error) => {
  return {
    type: "FETCH_PRODUCT_FAILURE",
    message: error.message || "there was an error while fetching the product",
  };
};

const fetchProductsRequest = () => {
  return {
    type: "FETCH_PRODUCTS_REQUEST",
  };
};

const fetchRecipesFailure = (error) => {
  return {
    type: "FETCH_PRODUCTS_FAILURE",
    message: error.message || "There was an error while fetching the products",
  };
};

const receiveProducts = (response) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    response: normalize(response.data.data, arrayOfProducts),
  };
};

const addToShoppingList = (item) => {
  return {
    type: "ADD_LIST_ITEM",
    item,
  };
};

const getShoppingList = () => {
  return {
    type: "GET_LIST_ITEMS_REQUEST",
  };
};

const getLikedProducts = () => {
  return {
    type: "GET_LIKE_LIST",
  };
};

const addToLikeList = (item) => {
  return {
    type: "ADD_TO_LIKE_LIST",
    item,
  };
};

const removeItemFromShoppingList = (id) => {
  return {
    type: "REMOVE_LIST_ITEM",
    id,
  };
};

const removeIngredient = (ingredient, productId) => {
  return {
    type: "REMOVE_INGREDIENT",
    ingredient,
    productId,
  };
};

export {
  fetchProducts,
  receiveProducts as receiveRecipes,
  fetchRecipesFailure,
  fetchProductsRequest as fetchRecipesRequest,
  addToShoppingList,
  getShoppingList,
  removeItemFromShoppingList,
  getLikedProducts,
  addToLikeList,
  removeIngredient,
  fetchProductFailure,
  fetchProductRequest,
  fetchProduct,
};
