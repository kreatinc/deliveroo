import React from "react";
import logo from "../../../assets/img/logo.png";
import Search from "./Search";
import Likes from "./Likes";
import Logo from "./Logo";

import { connect } from "react-redux";
import { getLikedProducts } from "reducers";
import * as actions from "../../../actions";

const mapStateToProps = (state) => {
  return {
    likedProducts: getLikedProducts(state),
  };
};

let Header = ({ getLikedProducts, fetchProduct, searchProduct }) => {
  return (
    <header className="header">
      <Logo logo={logo} />
      <Search searchProduct={searchProduct} />
      <Likes getLikedProducts={getLikedProducts} fetchProduct={fetchProduct} />
    </header>
  );
};

Header = connect(mapStateToProps, actions)(Header);

export default Header;
