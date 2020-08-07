import { setUser, getUser, removeUser } from "utils/localStorageHelpers";
import { setToken } from "services/apiClient";

const initialValue = getUser();
const user = (state = initialValue || {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_SUCCESS":
      const res = setUser(action.response);
      setToken(action.response.token);
      return res;
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

const userLogout = (state = {}, action) => {
  switch (action.type) {
  }
};

// case "USER_LOGIN_REQUEST":
// case "USER_REGISTER_SUCCESS":
//   console.log("the login response is :", action.response);
// case "USER_REGISTER_FAILURE":
//   console.log("the error message is : ", action.message);
// case "USER_REGISTER_REQUEST":

export default user;
