import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
