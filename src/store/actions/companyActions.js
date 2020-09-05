import * as companyServices from "services/company";
import * as ProductServices from "services/product";
import {
  addNotification,
  fetchProductsFailure,
  receiveProducts,
} from "store/actions/userActions";

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

const register = (credentials) => (dispatch) => {
  dispatch({ type: "COMPANY_LOGOUT_REQUEST" });
  return companyServices
    .register(credentials)
    .then((response) => {
      dispatch({ type: "COMPANY_REGISTER_SUCCESS", response });
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
  return ProductServices.getCommands()
    .then((response) => {
      dispatch({
        type: "FETCH_COMMANDS_SUCCESS",
        response: response.data.data,
      });
      // dispatch(addNotification("Commands fetched successfuly"));
    })
    .catch(() => {
      dispatch({ type: "FETCH_COMMANDS_FAILURE" });
      dispatch(
        addNotification("There was an error while fetching the commands")
      );
    });
};

export { login, register, logout, receiveCompany, getProducts, getCommands };
