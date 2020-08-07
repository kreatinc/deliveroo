import { useEffect, useState } from "react";

export const useAuthenticated = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setAuthenticated(true);
    }
  }, []);
  return authenticated;
};
