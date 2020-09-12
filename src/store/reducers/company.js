import { setCompany, removeCompany } from "utils/localStorageHelpers";
import apiClient from "services/apiClient";

const company = (state = {}, action) => {
  switch (action.type) {
    case "COMPANY_LOGIN_SUCCESS":
      const res = { ...state, ...setCompany(action.response) };
      apiClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.token}`;
      return res;
    case "COMPANY_LOGIN_FAILURE":
    case "COMPANY_LOGOUT_SUCCESS":
      return removeCompany();
    case "COMPANY_LOGOUT_FAILURE":
      return state;
    default:
      return state;
  }
};
// case "COMPANY_LOGIN_REQUEST":
// case "COMPANY_REGISTER_SUCCESS":
// case "COMPANY_REGISTER_FAILURE":
// case "COMPANY_REGISTER_REQUEST":

export default company;

export const getCompany = (state) => {
  return state;
};
