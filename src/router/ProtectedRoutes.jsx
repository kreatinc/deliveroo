import { useAuthenticated } from "customHooks";
import React, { useEffect } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { receiveCompany } from "store/actions/companyActions";
import { getCompany } from "utils/localStorageHelpers";
import Company from "../views/Company";

function ProtectedRoute({ children, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={() =>
        localStorage.getItem("company") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login/company",
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
