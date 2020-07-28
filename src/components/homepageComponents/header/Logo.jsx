import React from "react";

const Logo = ({ logo }) => {
  return (
    <a href="/home">
      <img src={logo} alt="Logo" className="header__logo" />
    </a>
  );
};

export default Logo;
