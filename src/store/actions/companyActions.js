import { normalize } from "normalizr";
import * as companyServices from "services/company";
import * as ProductServices from "services/product";
import {
  addNotification,
  fetchProductsFailure,
  receiveProducts,
} from "store/actions/userActions";
import { arrayOfProducts, product } from "utils/schema";

const receiveRunoutProducts = (response) => {
  return {
    type: "FETCH_RUNOUT_PRODUCT",
    response: normalize(response.data.data, arrayOfProducts),
  };
};

const login = (credentials, history) => (dispatch) => {
  dispatch({ type: "COMPANY_LOGIN_REQUEST" });
  return companyServices
    .login(credentials)
    .then((response) => {
      dispatch(receiveCompany(response));
      history.push("/company");
      dispatch(addNotification("You're logged in"));
    })
    .catch((error) =>
      dispatch(addNotification("There was an error while logging in"))
    );
};

const register = (credentials, history) => (dispatch) => {
  dispatch({ type: "COMPANY_LOGOUT_REQUEST" });
  return companyServices
    .register(credentials)
    .then((response) => {
      dispatch({ type: "COMPANY_REGISTER_SUCCESS", response });
      history.push("/login");
      dispatch(addNotification("Your account has been created"));
    })
    .catch((error) => {
      dispatch({ type: "COMPANY_REGISTER_FAILURE", message: error.message });
      dispatch(
        addNotification("There was an error while creating your account")
      );
    });
};

const logout = (history) => (dispatch) => {
  dispatch({ type: "COMPANY_LOGOUT_REQUEST" });
  return companyServices
    .logout()
    .then((response) => {
      dispatch({ type: "COMPANY_LOGOUT_SUCCESS", response: response.data });
      history.push("/");
      dispatch(addNotification("You're logged out"));
      window.location.reload();
    })
    .catch((error) => {
      dispatch(addNotification("There was an error while logging out"));
      dispatch({ type: "COMPANY_LOGOUT_FAILURE", message: error.message });
      history.push("/");
    });
};

const receiveCompany = (response) => ({
  type: "COMPANY_LOGIN_SUCCESS",
  response: response.data,
});

const getProducts = () => (dispatch) => {
  return companyServices
    .getProducts()
    .then((response) => {
      dispatch(receiveProducts(response));
      dispatch(addNotification("Products fetched successfuly"));
    })
    .catch((error) => {
      dispatch(fetchProductsFailure(error));
      dispatch(
        addNotification("There was an error while fetching the products")
      );
    });
};

const getCommands = () => (dispatch) => {
  dispatch({ type: "FETCH_COMMANDS_REQUEST" });
  return companyServices
    .getCommands()
    .then((response) => {
      console.log("the commands are", response);
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

const productCheck = (product, isEditing) => {
  const errors = [];
  if (isEditing && !product.id) errors.push("the product id is not provided");
  if (!product.price && typeof price !== "number")
    errors.push("price is not a number");
  if (!product.title) errors.push("the title is required");
  if (!product.quantity) errors.push("the quantity is required");
  if (!product.category) errors.push("the category is required");
  if (!product.description) errors.push("the description is required");
  if (!product.recipe) errors.push("the recipe is required");

  return errors;
};

const addProduct = (product) => (dispatch) => {
  const errors = productCheck(product, false);
  if (errors.length !== 0) {
    dispatch(addNotification("Please verify the inserted informations"));
    return Promise.resolve();
  }
  return companyServices
    .addProduct(product)
    .then((response) => {
      window.location.reload();
      dispatch(receiveProduct(response));
      dispatch(addNotification("Product added successfully"));
    })
    .catch((err) =>
      addNotification("There was a problem while adding the product")
    );
};
const editProduct = (product) => (dispatch) => {
  const errors = productCheck(product, true);
  if (errors.length !== 0) {
    dispatch(addNotification("Please verify the inserted informations"));
    return Promise.resolve();
  }
  return companyServices
    .editProduct(product)
    .then((response) => {
      dispatch(receiveProduct(response));
      dispatch(addNotification("Product added successfully"));
    })
    .catch((err) =>
      dispatch(addNotification("There was a problem while adding the product"))
    );
};
const removeProduct = (product) => (dispatch) => {
  return companyServices
    .removeProduct(product)
    .then((response) => {
      window.location.reload();
      dispatch(addNotification("Product added successfully"));
    })
    .catch((err) =>
      dispatch(addNotification("There was a problem while adding the product"))
    );
};
const addCommand = (command) => (dispatch) => {
  return companyServices
    .addCommand(command)
    .then((response) => {
      dispatch(addNotification("command added successfully"));
    })
    .catch((err) =>
      dispatch(addNotification("There was a problem while adding the command"))
    );
};
const editCommand = (command) => (dispatch) => {
  return companyServices
    .editCommand(command)
    .then((response) => {
      dispatch(addNotification("command added successfully"));
      window.location.reload();
    })
    .catch((err) =>
      dispatch(addNotification("There was a problem while adding the command"))
    );
};
const removeCommand = (command) => (dispatch) => {
  return companyServices
    .removeCommand(command)
    .then((response) => {
      window.location.reload();
      dispatch(addNotification("command added successfully"));
    })
    .catch((err) =>
      dispatch(addNotification("There was a problem while adding the command"))
    );
};

const receiveProduct = (response) => {
  return {
    type: "FETCH_PRODUCT_SUCCESS",
    response: normalize(response.data.data, product),
  };
};

const getRunOutProducts = () => (dispatch) => {
  return ProductServices.getRunOutProducts()
    .then((response) => dispatch(receiveRunoutProducts(response)))
    .catch(() =>
      dispatch(
        addNotification("There was an error while fetching the products")
      )
    );
};

const fetchCategories = () => (dispatch) => {
  return ProductServices.fetchCategories()
    .then((response) => {
      dispatch({
        type: "FETCH_CATEGORIES_SUCCESS",
        response: response.data.data,
      });
      dispatch(addNotification("Categories fetched successfuly"));
    })
    .catch((error) =>
      dispatch(
        addNotification("There was an error while fetching the categories")
      )
    );
};

const updatePassword = (oldPassword, newPassword, confirmation) => (
  dispatch
) => {
  return companyServices
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

const updateCompanyInformation = (informations) => (dispatch) => {
  return companyServices
    .updatecompanyInformation(informations)
    .then((response) => {
      dispatch(receiveCompany(response.data));
      dispatch(addNotification("Informations updated successfuly"));
    })
    .catch((error) => {
      dispatch(addNotification("There was an error while updating profile"));
    });
};

export {
  login,
  register,
  logout,
  receiveCompany,
  getProducts,
  getCommands,
  getRunOutProducts,
  addProduct,
  removeProduct,
  editProduct,
  addCommand,
  removeCommand,
  editCommand,
  fetchCategories,
  updatePassword,
  updateCompanyInformation,
};
