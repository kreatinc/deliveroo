import React from "react";
import logo from "../../../assets/img/logo.png";
import Search from "./Search";
import Likes from "./Likes";
import Logo from "./Logo";

import { connect } from "react-redux";
import { getLikedProducts } from "reducers";
import * as actions from "../../../actions";
import { useParams, useLocation } from "react-router-dom";
import Button from "components/Button";

const mapStateToProps = (state) => {
  return {
    likedProducts: getLikedProducts(state),
  };
};

let Header = ({
  getLikedProducts,
  fetchProduct,
  searchProduct,
  clearSearchResults,
}) => {
  const { category } = useParams();
  const location = useLocation();
  return (
    <header className="header">
      <Logo logo={logo} clearSearchResults={clearSearchResults} />
      {category && <Search searchProduct={searchProduct} />}
      {category && (
        <Likes
          getLikedProducts={getLikedProducts}
          fetchProduct={fetchProduct}
        />
      )}

      {location.pathname === "/" ? (
        <Button>Login</Button>
      ) : (
        <Button
          onClick={() => {
            // TO-DO : logout logic
          }}
        >
          Logout
        </Button>
      )}
    </header>
  );
};

Header = connect(mapStateToProps, actions)(Header);

export default Header;
