import * as ProductServices from "services/productServices";
import * as userServices from "services/userServices";
import { normalize } from "normalizr";
import { arrayOfProducts, product } from "../utils/schema";
import search from "utils/search";
import history from "utils/history";

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
const fetchSearchProductsRequest = () => {
  return {
    type: "FETCH_SEARCH_PRODUCTS_REQUEST",
  };
};
const fetchSearchProductsFailure = (error) => {
  return {
    type: "FETCH_SEARCH_PRODUCTS_FAILURE",
    message: error.message || "There was an error while fetching the products",
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

const receiveSearchProducts = (response) => {
  return {
    type: "FETCH_SEARCH_PRODUCTS_SUCCESS",
    response: normalize(response.data.data, arrayOfProducts),
  };
};

const addToShoppingList = (product) => {
  return {
    type: "ADD_LIST_ITEM",
    product,
  };
};

const getShoppingListRequest = () => {
  return {
    type: "GET_LIST_ITEMS_REQUEST",
  };
};

const getLikedProducts = () => (dispatch) => {
  return {
    type: "GET_LIKE_LIST",
  };
};

const addToLikeList = (product) => (dispatch) => {
  return {
    type: "ADD_TO_LIKE_LIST",
    product,
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

const clearSearchResults = () => {
  return {
    type: "CLEAR_SEARCH_RESULTS",
  };
};

const searchProduct = () => (dispatch) => {
  return search(dispatch);
};

const login = (credentials, history) => (dispatch) => {
  dispatch(userLoginRequest());
  return userServices.userLogin(credentials).then(
    (response) => {
      dispatch(receiveUser(response));
      history.push("/home");
    },
    (error) => dispatch(userLoginfailure(error))
  );
};

const receiveUser = (response) => ({
  type: "USER_LOGIN_SUCCESS",
  response: response.data,
});
const userLoginRequest = () => ({
  type: "USER_LOGIN_REQUEST",
});
const userLoginfailure = (error) => ({
  type: "USER_LOGIN_FAILURE",
  message: error.message,
});

const register = (credentials) => (dispatch) => {
  dispatch(userRegisterRequest());
  return userServices.userRegister(credentials).then(
    (response) => {
      dispatch(userRegisterSuccess(response));
    },
    (error) => dispatch(userRegisterfailure(error))
  );
};

const userRegisterSuccess = (response) => ({
  type: "USER_REGISTER_SUCCESS",
  response,
});
const userRegisterRequest = () => ({
  type: "USER_REGISTER_REQUEST",
});
const userRegisterfailure = (error) => ({
  type: "USER_REGISTER_FAILURE",
  message: error.message,
});

const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export {
  fetchProducts,
  receiveProducts as receiveRecipes,
  fetchProductsFailure,
  fetchProductsRequest,
  addToShoppingList,
  getShoppingListRequest,
  removeItemFromShoppingList,
  getLikedProducts,
  addToLikeList,
  removeIngredient,
  fetchProductFailure,
  fetchProductRequest,
  fetchProduct,
  fetchCategories,
  fetchSearchProductsFailure,
  receiveSearchProducts,
  fetchSearchProductsRequest,
  clearSearchResults,
  searchProduct,
  login,
  register,
  logout,
};
