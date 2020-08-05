const user = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
    case "USER_LOGIN_FAILURE":
    case "USER_LOGIN_SUCCESS":
      console.log("the login response is :", action.response);
    default:
      return state;
  }
};
