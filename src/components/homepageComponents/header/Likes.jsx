import React, { useEffect } from "react";
import icons from "../../../assets/img/icons.svg";
import Like from "./Like";
import { connect } from "react-redux";
import { getLikedProducts } from "reducers";
import * as actions from "../../../actions";

const mapStateToProps = (state) => {
  return {
    likedProducts: getLikedProducts(state),
  };
};

let Likes = ({ likedProducts, dispatch }) => {
  useEffect(() => {
    dispatch(actions.getLikedProducts());
  }, []);
  return (
    <div className="likes">
      <div className="likes__field">
        <svg className="likes__icon">
          <use href={icons + "#icon-heart"}></use>
        </svg>
      </div>
      <div className="likes__panel">
        <ul className="likes__list">
          {likedProducts &&
            likedProducts.map((item) => (
              <Like item={item.details} key={item.details.id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

Likes = connect(mapStateToProps, null)(Likes);

export default Likes;
