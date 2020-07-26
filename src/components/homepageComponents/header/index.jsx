import React from "react";
import logo from "../../../assets/img/logo.png";
import Search from "./Search";
import Likes from "./Likes";
import Logo from "./Logo";
import Categories from "./Categories";

const Header = () => {
  return (
    <header className="header">
      <Logo logo={logo} />
      <Search />
      <Categories />
      <Likes />
    </header>
  );
};

export default Header;
