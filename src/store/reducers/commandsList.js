import { combineReducers } from "@reduxjs/toolkit";

const commands = (state = [], action) => {
  switch (action.type) {
    case "FETCH_COMMANDS_SUCCESS":
      return action.response;
    case "ADD_COMMAND_SUCCESS":
      return [
        {
          // NOTE: there will always be only one item inside the array in this case
          ...action.response[0],
          delivery_state: "waiting",
        },
      ];
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
