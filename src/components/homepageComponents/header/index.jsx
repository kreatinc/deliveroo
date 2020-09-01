import React, { useEffect } from "react";
import logo from "../../../assets/img/logo.png";
import Search from "./Search";
import Likes from "./LikesList";
import Logo from "./Logo";

import { connect } from "react-redux";
import {
  getLikedProducts,
  getIsFetchingLike,
  getNotifications,
} from "store/reducers";
import * as actions from "../../../store/actions/userActions";
import { useParams, useLocation, useHistory } from "react-router-dom";
import Button from "components/Button";
import { useAuthenticated } from "customHooks";
import { Notification } from "rsuite";

import UserModal from "components/UserInformationModal";

const mapStateToProps = (state) => {
  return {
    likedProducts: getLikedProducts(state),
    isFetching: getIsFetchingLike(state),
    notifications: getNotifications(state),
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
  notifications,
  logout,
}) => {
  const { category } = useParams();
  const location = useLocation();
  const history = useHistory();
  const isAuthenticated = useAuthenticated();

  useEffect(() => {
    if (notifications) {
      notifications.map((notification) => {
        Notification.info({
          title: "Notification",
          placement: "bottomStart",
          duration: 3000,
          description: notification,
        });
      });
    }
  }, [notifications]);
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
          clearCommands={clearCommands}
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
