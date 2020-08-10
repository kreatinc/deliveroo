import { setUser, getUser, removeUser } from "utils/localStorageHelpers";
import apiClient from "services/apiClient";

const user = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_SUCCESS":
      apiClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${action.response.token}`;
      console.log("the login response is :", action.response);
      return setUser(action.response);
    case "USER_LOGIN_FAILURE":
      console.log("the error message is : ", action.message);
    case "USER_LOGOUT_SUCCESS":
      return removeUser();
    case "USER_LOGOUT_REQUEST":
      console.log("requesting");
    case "USER_LOGOUT_FAILURE":
      return removeUser();
    default:
      return state;
  }
};
// case "USER_LOGIN_REQUEST":
// case "USER_REGISTER_SUCCESS":
//   console.log("the login response is :", action.response);
// case "USER_REGISTER_FAILURE":
//   console.log("the error message is : ", action.message);
// case "USER_REGISTER_REQUEST":

export default user;

export const getUserId = (state) => {
  return state.id;
};
