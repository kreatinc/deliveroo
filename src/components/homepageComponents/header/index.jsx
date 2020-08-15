import React from "react";
import logo from "../../../assets/img/logo.png";
import Search from "./Search";
import Likes from "./LikesList";
import Logo from "./Logo";

import { connect } from "react-redux";
import { getLikedProducts, getIsFetchingLike } from "store/reducers";
import * as actions from "../../../store/actions";
import { useParams, useLocation, useHistory } from "react-router-dom";
import Button from "components/Button";
import { useAuthenticated } from "customHooks";
import { Avatar } from "rsuite";
import UserModal from "components/UserInformationModal";

const mapStateToProps = (state) => {
  return {
    likedProducts: getLikedProducts(state),
    isFetching: getIsFetchingLike(state),
  };
};

let Header = ({
  getLikedProducts,
  likedProducts,
  fetchProduct,
  searchProduct,
  clearSearchResults,
  receiveUser,
  getCommands,
  clearCommands,
  logout,
}) => {
  const { category } = useParams();
  const location = useLocation();
  const history = useHistory();
  const isAuthenticated = useAuthenticated();
  return (
    <header className="header">
      <Logo
        logo={logo}
        clearSearchResults={clearSearchResults}
        clearCommands={clearCommands}
      />
      {category && <Search searchProduct={searchProduct} />}
      {isAuthenticated && category && (
        <Likes
          getLikedProducts={getLikedProducts}
          likedProducts={likedProducts}
          fetchProduct={fetchProduct}
          receiveUser={receiveUser}
        />
      )}
      {isAuthenticated && <UserModal />}
      {isAuthenticated && category && (
        <Button
          handleClick={() => {
            getCommands();
            if (clearSearchResults) {
              clearSearchResults();
            }
          }}
        >
          {" "}
          My commands
        </Button>
      )}
      {location.pathname === "/" && <Button>Login</Button>}
      {isAuthenticated && (
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
