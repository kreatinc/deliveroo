import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ logo }) => {
  return (
    <Link to="/home">
      <img src={logo} alt="Logo" className="header__logo" />
    </Link>
  );
};

export default Logo;
