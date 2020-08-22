import React from "react";
import ReactDOM from "react-dom";
import "react-bulma-components";
import App from "./App";
import rootReducer from "./store/reducers";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "index.css";

const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

export default store;
