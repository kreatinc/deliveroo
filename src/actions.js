import * as ProductServices from "./services/productServices";
import { normalize } from "normalizr";
import { arrayOfProducts, product } from "./utils/schema";

const fetchProducts = (link = null) => (dispatch) => {
  dispatch(fetchProductsRequest());
  return ProductServices.fetchProducts(link).then(
    (response) => dispatch(receiveProducts(response)),
    (error) => dispatch(fetchProductsFailure(error))
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

// const receiveProductLikes = (response) => {};
// const fetchProductLikesFailure = () => {};

// const fetchProductComments = (productId) => (dispatch) => {
//   return ProductServices.fetchProductComments(productId).then(
//     (response) => dispatch(receiveProductComments(response)),
//     (error) => dispatch(fetchProductCommentsFailure(error))
//   );
// };

const receiveProduct = (response) => {
  return {
    type: "FETCH_PRODUCT_SUCCESS",
    response: normalize(response.data.data, product),
  };
};

// const fetchProductCommentsFailure = (error) => {
//   return {
//     type: "FETCH_PRODUCT_COMMENTS_FAILURE",
//     message: error.message,
//   };
// };

// const receiveProductComments = (response) => {
//   return {
//     type: "FETCH_PRODUCT_COMMENTS_SUCCESS",
//     response: normalize(response.data.data, arrayOfComments),
//   };
// };

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

const fetchProductsFailure = (error) => {
  return {
    type: "FETCH_PRODUCTS_FAILURE",
    message: error.message || "There was an error while fetching the products",
  };
};

const receiveProducts = (response) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    response: normalize(response.data.data, arrayOfProducts),
    links: response.data.links,
    meta: response.data.meta,
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
  fetchProductsFailure as fetchRecipesFailure,
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
