import { setUser, removeUser } from "utils/localStorageHelpers";
import apiClient from "services/apiClient";

const user = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_SUCCESS":
      apiClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${action.response.token}`;
      return setUser(action.response);
    case "USER_LOGIN_FAILURE":
    case "USER_LOGOUT_SUCCESS":
      return removeUser();
    case "USER_LOGOUT_REQUEST":
    case "USER_LOGOUT_FAILURE":
      return removeUser();
    default:
      return state;
  }
};
// case "USER_LOGIN_REQUEST":
// case "USER_REGISTER_SUCCESS":
// case "USER_REGISTER_FAILURE":
// case "USER_REGISTER_REQUEST":

export default user;

export const getUser = (state) => {
  return state;
};
