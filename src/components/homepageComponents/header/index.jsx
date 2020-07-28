import React from "react";
import logo from "../../../assets/img/logo.png";
import Search from "./Search";
import Likes from "./Likes";
import Logo from "./Logo";

import { connect } from "react-redux";
import { getLikedProducts } from "reducers";
import * as actions from "../../../actions";
import Button from "./Button";
import { useParams } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    likedProducts: getLikedProducts(state),
  };
};

let Header = ({ getLikedProducts, fetchProduct, searchProduct }) => {
  const { category } = useParams();
  return (
    <header className="header">
      <Logo logo={logo} />
      {category && <Search searchProduct={searchProduct} />}
      {category && (
        <Likes
          getLikedProducts={getLikedProducts}
          fetchProduct={fetchProduct}
        />
      )}
      <Button
        onClick={() => {
          // TO-DO : logout logic
        }}
      >
        Logout
      </Button>
    </header>
  );
};

Header = connect(mapStateToProps, actions)(Header);

export default Header;
