import { setUser, removeUser } from "utils/localStorageHelpers";
import apiClient from "services/apiClient";

const user = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_SUCCESS":
      const res = { ...state, ...setUser(action.response) };
      apiClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.token}`;
      return res;
    case "USER_LOGIN_FAILURE":
    case "USER_LOGOUT_SUCCESS":
      removeUser();
      window.location.reload();
      break;
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
