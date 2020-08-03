import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ logo, clearSearchResults }) => {
  return (
    <Link to="/home" onClick={() => clearSearchResults()}>
      <img src={logo} alt="Logo" className="header__logo" />
    </Link>
  );
};

export default Logo;
