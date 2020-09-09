import React, { useEffect } from "react";
import routes from "./router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "react-bulma-components/lib";
import history from "utils/history";
import "rsuite/dist/styles/rsuite-default.css";
import ProtectedRoute from "router/ProtectedRoutes";
import Login from "views/Login";
import CompanyLogin from "components/companyComponents/Login";
import CompanyRegister from "components/companyComponents/Register";
import Home from "views/Home/";
import Register from "views/Register";
import Welcome from "views/Welcome";
import Company from "views/Company";
import { useAuthenticated } from "customHooks";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login/company">
            <CompanyLogin />
          </Route>
          <Route exact path="/register/company">
            <CompanyRegister />
          </Route>
          <Route exact path="/home/:category?">
            <Home />
          </Route>
          <ProtectedRoute exact path="/company/:slug?">
            <Company />
          </ProtectedRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
