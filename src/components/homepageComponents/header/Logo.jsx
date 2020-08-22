import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ logo, clearSearchResults, clearCommands }) => {
  return (
    <Link
      to="/home"
      onClick={() => {
        if (clearSearchResults) clearSearchResults();
        if (clearCommands) clearCommands();
      }}
    >
      <img src={logo} alt="Logo" className="header__logo" />
    </Link>
  );
};

export default Logo;
