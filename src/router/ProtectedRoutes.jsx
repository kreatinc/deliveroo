import { useAuthenticated } from "customHooks";
import React, { useEffect } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { receiveCompany } from "store/actions/companyActions";
import { getCompany } from "utils/localStorageHelpers";
import Company from "../views/Company";

const ProtectedRoute = ({ exact, path }) => {
  const isAuthenticated = useAuthenticated("company");
  const location = useLocation();

  if (isAuthenticated) {
    return (
      <Route exact={exact} path={path}>
        <Company />
      </Route>
    );
  }
  if (
    !isAuthenticated &&
    [
      "/company",
      "/company/products",
      "/company/commands",
      "/company/stock",
    ].includes(location.pathname)
  ) {
    return <Redirect to="/company/login" />;
  }
  return null;
};

export default ProtectedRoute;
