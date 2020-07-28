import * as ProductServices from "./services/productServices";
import { normalize } from "normalizr";
import { arrayOfProducts, product } from "./utils/schema";

const fetchProducts = (paginationLink = null, category = "others") => (
  dispatch
) => {
  dispatch(fetchProductsRequest(category));
  return ProductServices.fetchProducts(paginationLink, category).then(
    (response) => {
      dispatch(receiveProducts(response, category));
    },
    (error) => dispatch(fetchProductsFailure(error, category))
  );
};

const fetchCategories = () => (dispatch) => {
  return ProductServices.fetchCategories().then((response) =>
    dispatch(receiveCategories(response), (error) =>
      console.log("there an error while fetching the categories")
    )
  );
};

const receiveCategories = (response) => {
  return {
    type: "FETCH_CATEGORIES_SUCCESS",
    response: response.data.data,
  };
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

const fetchProductsRequest = (category = "others") => {
  return {
    type: "FETCH_PRODUCTS_REQUEST",
    category,
  };
};

const fetchProductsFailure = (error, category) => {
  return {
    type: "FETCH_PRODUCTS_FAILURE",
    message: error.message || "There was an error while fetching the products",
    category,
  };
};

const receiveProducts = (response, category = "others") => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    response: normalize(response.data.data, arrayOfProducts),
    category,
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

const getLikedProducts = () => (dispatch) => {
  return {
    type: "GET_LIKE_LIST",
  };
};

const addToLikeList = (item) => (dispatch) => {
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

const searchProduct = (productName) => (dispatch) => {
  dispatch(fetchProductsRequest());
  return ProductServices.searchProduct(productName).then(
    (response) => {
      console.log("the response is the following : ", response);
      dispatch(receiveProducts(response));
    },
    (error) => dispatch(fetchProductsFailure(error))
  );
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
  fetchCategories,
  searchProduct,
};
