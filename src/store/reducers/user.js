import { setUser, getUser, removeUser } from "utils/localStorageHelpers";
import apiClient from "services/apiClient";

const initialValue = getUser();
const user = (state = initialValue || {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_SUCCESS":
      apiClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${action.response.token}`;

      return setUser(action.response);
    // case "USER_LOGIN_FAILURE":
    //   console.log("the error message is : ", action.message);
    case "LOGOUT":
      return removeUser();
    // case "USER_LOGIN_REQUEST":
    // case "USER_REGISTER_SUCCESS":
    //   console.log("the login response is :", action.response);
    // case "USER_REGISTER_FAILURE":
    //   console.log("the error message is : ", action.message);
    // case "USER_REGISTER_REQUEST":
    default:
      return state;
  }
};

export default user;
