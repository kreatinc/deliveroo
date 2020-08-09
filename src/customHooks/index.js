import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const useAuthenticated = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setAuthenticated(true);
      // history.push("/home");
    }
  }, []);
  return authenticated;
};
