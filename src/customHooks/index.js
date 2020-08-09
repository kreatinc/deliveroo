import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import routes from "router";

export const useAuthenticated = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setAuthenticated(true);
      if (
        ["/", "/login", "/register", "/welcome"].includes(location.pathname)
      ) {
        history.push("/home");
      }
    }
  }, []);
  return authenticated;
};
