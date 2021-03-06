import * as ProductServices from "services/productServices";
import * as userServices from "services/userServices";
import { normalize } from "normalizr";
import { arrayOfProducts, product } from "../utils/schema";
import search from "utils/search";
import { retrieveCommandFromShoppingList } from "utils";

const fetchProducts = (paginationLink = null, category = "others") => (
  dispatch
) => {
  dispatch(fetchProductsRequest(category));
  return ProductServices.fetchProducts(paginationLink, category)
    .then((response) => {
      dispatch(receiveProducts(response, category));
      dispatch(addNotification("Products fetched successfuly"));
    })
    .catch((error) => {
      dispatch(fetchProductsFailure(error, category));
      dispatch(
        addNotification("There was an error while fetching the products")
      );
    });
};

const fetchCategories = () => (dispatch) => {
  return ProductServices.fetchCategories()
    .then((response) => {
      dispatch(receiveCategories(response));
      dispatch(addNotification("Categories fetched successfuly"));
    })
    .catch((error) =>
      dispatch(
        addNotification("There was an error while fetching the categories")
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
  return ProductServices.fetchProduct(productId)
    .then((response) => {
      dispatch(receiveProduct(response));
      dispatch(addNotification("Product fetched successfuly"));
    })
    .catch((error) => {
      dispatch(fetchProductFailure(error));
      addNotification("There was an error while fetching the product");
    });
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

const addNotification = (notification) => ({
  type: "ADD_NOTIFICATION",
  notification,
});

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

const addToShoppingList = (product, quantity) => {
  return {
    type: "ADD_LIST_ITEM",
    product,
    quantity,
  };
};

const getShoppingList = () => {
  return {
    type: "GET_LIST_ITEMS",
  };
};

const getLikedProducts = () => (dispatch) => {
  dispatch(getLikedProductsRequest());
  return userServices
    .getLikedProducts()
    .then((response) => {
      dispatch(getLikedProductsSuccess(response));
      dispatch(addNotification("Liked products fetched successfuly"));
    })
    .catch((error) => {
      dispatch(getLikedProductsFailure(error));
      dispatch(
        addNotification("There was an error while fetching the liked products")
      );
    });
};
const getLikedProductsRequest = () => ({
  type: "GET_LIKE_LIST_REQUEST",
});

const getLikedProductsSuccess = (response) => {
  return {
    type: "GET_LIKE_LIST_SUCCESS",
    response: response.data.data.likes,
  };
};
const getLikedProductsFailure = (error) => ({
  type: "GET_LIKE_LIST_FAILURE",
  message: error.message,
});

const addToLikeList = (productId) => (dispatch) => {
  dispatch({ type: "LIKE_REQUEST" });
  return ProductServices.likeProduct(productId)
    .then((response) => {
      dispatch(addToLikeListSuccess(response));
      dispatch({ type: "LIKE_SUCCESS" });
      dispatch(addNotification("Product liked successfuly"));
    })
    .catch((error) => {
      dispatch({ type: "LIKE_FAILURE" });
      dispatch(addNotification("There was an error while liking the product"));
    });
};
const removeFromLikeList = (productId) => (dispatch) => {
  dispatch({ type: "LIKE_REQUEST" });
  return ProductServices.unlikeProduct(productId)
    .then((response) => {
      dispatch(removeFromLikeListSuccess(response));
      dispatch({ type: "LIKE_SUCCESS" });
      dispatch(addNotification("Product disliked successfuly"));
    })
    .catch((error) =>
      dispatch(addNotification("There was an error while liking the product"))
    );
};

const addToLikeListSuccess = (response) => {
  return {
    type: "ADD_TO_LIKE_LIST",
    response: response.data.data,
  };
};

const removeFromLikeListSuccess = (response) => {
  return {
    type: "REMOVE_FROM_LIKE_LIST",
    response: response.data.data,
  };
};

const removeFromShoppingList = (productId) => {
  return {
    type: "REMOVE_LIST_ITEM",
    id: productId,
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
  return userServices
    .userLogin(credentials)
    .then((response) => {
      dispatch(receiveUser(response));
      history.push("/home");
      dispatch(addNotification("You're logged in"));
    })
    .catch((error) =>
      dispatch(addNotification("There was an error while logging in"))
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

const updatePassword = (oldPassword, newPassword, confirmation) => (
  dispatch
) => {
  return userServices
    .updatePassword(oldPassword, newPassword, confirmation)
    .then((response) => {
      dispatch(addNotification("Password updated successfuly"));
    })
    .catch((error) => {
      dispatch(
        addNotification("There was an error while changing the password")
      );
    });
};

const updateUserInformation = (informations) => (dispatch) => {
  return userServices
    .updateUserInformation(informations)
    .then((response) => {
      dispatch(receiveUser(response.data));
      dispatch(addNotification("Informations updated successfuly"));
    })
    .catch((error) => {
      dispatch(addNotification("There was an error while updating profile"));
    });
};

const register = (credentials) => (dispatch) => {
  dispatch(userRegisterRequest());
  return userServices
    .userRegister(credentials)
    .then((response) => {
      dispatch(userRegisterSuccess(response));
      dispatch(addNotification("Your account has been created"));
    })
    .catch((error) => {
      dispatch(userRegisterfailure(error));
      dispatch(
        addNotification("There was an error while creating your account")
      );
    });
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

const logout = (history) => (dispatch) => {
  userLogoutRequest();
  return userServices
    .userLogout()
    .then((response) => {
      dispatch(userLogoutSuccess(response));
      dispatch({ type: "CLEAR_SHOOPING_LIST" });
      history.push("/");
      dispatch(addNotification("You're logged out"));
      window.location.reload();
    })
    .catch((error) => {
      dispatch(addNotification("There was an error while logging out"));
      dispatch(userLogoutfailure(error));
      history.push("/");
    });
};

const userLogoutSuccess = (response) => ({
  type: "USER_LOGOUT_SUCCESS",
  response: response.data,
});
const userLogoutRequest = () => ({
  type: "USER_LOGOUT_REQUEST",
});
const userLogoutfailure = (error) => ({
  type: "USER_LOGOUT_FAILURE",
  message: error.message,
});

const addComment = (comment, productId) => (dispatch) => {
  return userServices
    .addComment(comment, productId)
    .then((response) => {
      dispatch(receiveComment(response, productId));
      dispatch(addNotification("Comment added successfuly"));
    })
    .catch((error) => {
      dispatch(addNotification("There was an error while adding the comment"));
    });
};

const receiveComment = (response, productId) => ({
  type: "ADD_COMMENT",
  response: response.data.data,
  productId,
});

const removeComment = (commentId, productId) => (dispatch) => {
  return userServices
    .removeComment(commentId)
    .then((response) => {
      dispatch(removeCommentSuccess(response, productId, commentId));
      dispatch(addNotification("Comment removed successfuly"));
    })
    .catch((error) =>
      dispatch(addNotification("There was an error while removing the comment"))
    );
};

const removeCommentSuccess = (response, productId, commentId) => ({
  type: "REMOVE_COMMENT",
  productId,
  commentId,
});

const editComment = (comment, productId, commentId) => (dispatch) => {
  return userServices
    .editComment(comment, commentId)
    .then((response) => {
      dispatch(receiveEditedComment(response, productId, commentId));
      dispatch(addNotification("Comment edited successfuly"));
    })
    .catch((error) =>
      dispatch(addNotification("There was an error while editing the comment"))
    );
};

const receiveEditedComment = (response, productId, commentId) => ({
  type: "EDIT_COMMENT",
  response: response.data.data,
  productId,
  commentId,
});

const addCommand = (shoppingList, address) => (dispatch) => {
  const command = retrieveCommandFromShoppingList(shoppingList, address);
  return ProductServices.sendCommand(command)
    .then((response) => {
      dispatch(receiveCommand(response));
      dispatch({ type: "CLEAR_SHOOPING_LIST" });
      dispatch(addNotification("Command added successfuly"));
    })
    .catch((error) => {
      dispatch(addNotification("There was an error while adding a command"));
    });
};

const getCommands = () => (dispatch) => {
  dispatch({ type: "FETCH_COMMANDS_REQUEST" });
  return ProductServices.getCommands()
    .then((response) => {
      dispatch({
        type: "FETCH_COMMANDS_SUCCESS",
        response: response.data.data,
      });
      dispatch(addNotification("Commands fetched successfuly"));
    })
    .catch(() => {
      dispatch({ type: "FETCH_COMMANDS_FAILURE" });
      dispatch(
        addNotification("There was an error while fetching the commands")
      );
    });
};

const clearCommands = () => ({
  type: "CLEAR_COMMANDS_LIST",
});

const receiveCommand = (response) => ({
  type: "ADD_COMMAND_SUCCESS",
  response: response.data.data,
});

export {
  clearCommands,
  getCommands,
  fetchProducts,
  receiveProducts,
  fetchProductsFailure,
  fetchProductsRequest,
  addToShoppingList,
  getShoppingList,
  removeFromShoppingList,
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
  receiveUser,
  register,
  logout,
  userLogoutSuccess,
  userLogoutRequest,
  userLogoutfailure,
  removeFromLikeList,
  addComment,
  removeComment,
  editComment,
  addCommand,
  updatePassword,
  updateUserInformation,
};
