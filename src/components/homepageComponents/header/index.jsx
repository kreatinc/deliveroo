import React from "react";
import logo from "../../../assets/img/logo.png";
import Search from "./Search";
import Likes from "./Likes";
import Logo from "./Logo";

import { connect } from "react-redux";
import { getLikedProducts } from "store/reducers";
import * as actions from "../../../store/actions";
import { useParams, useLocation, useHistory } from "react-router-dom";
import Button from "components/Button";
import { useAuthenticated } from "customHooks";

const mapStateToProps = (state) => {
  return {
    likedProducts: getLikedProducts(state),
  };
};

let Header = ({
  getLikedProducts,
  likedProducts,
  fetchProduct,
  searchProduct,
  clearSearchResults,
  logout,
}) => {
  const { category } = useParams();
  const location = useLocation();
  const history = useHistory();
  const authenticated = useAuthenticated();
  return (
    <header className="header">
      <Logo logo={logo} clearSearchResults={clearSearchResults} />
      {category && <Search searchProduct={searchProduct} />}
      {authenticated && category && (
        <Likes
          getLikedProducts={getLikedProducts}
          likedProducts={likedProducts}
          fetchProduct={fetchProduct}
        />
      )}

      {location.pathname === "/" && <Button>Login</Button>}
      {authenticated && (
        <Button
          handleClick={() => {
            logout(history);
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
