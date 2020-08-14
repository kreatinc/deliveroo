import { combineReducers } from "@reduxjs/toolkit";
import { removeShoppingList } from "utils/localStorageHelpers";

const commands = (state = [], action) => {
  switch (action.type) {
    case "FETCH_COMMANDS_SUCCESS":
      return action.response;
    case "ADD_COMMAND_SUCCESS":
      return action.response;
    case "CLEAR_COMMANDS_LIST":
      return [];
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case "FETCH_COMMANDS_REQUEST":
      return true;
    case "FETCH_COMMANDS_SUCCESS":
    case "FETCH_COMMANDS_FAILURE":
      return false;
    default:
      return state;
  }
};

export default combineReducers({ commands, isFetching });

export const getCommands = (state) => state;

export const getIsFetchingCommands = (state) => state;
