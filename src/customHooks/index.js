import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const useAuthenticated = (item = "user") => {
  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (localStorage.getItem(item)) {
      setAuthenticated(true);
      if (
        ["/", "/login", "/register", "/welcome"].includes(location.pathname) &&
        item === "user"
      ) {
        history.push("/home");
      }
      if (
        ["/login/company", "/register/company"].includes(location.pathname) &&
        item === "company"
      ) {
        history.push("/company");
      }
    }
  }, []);
  return authenticated;
};
