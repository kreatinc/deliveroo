import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import routes from "router";

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
    }
  }, []);
  return authenticated;
};
