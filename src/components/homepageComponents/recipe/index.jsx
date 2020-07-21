import React from "react";
import Figure from "./Figure";
import Details from "./Details";
import Ingredients from "./Ingredients";
import { getVisibleProduct, getIsProductLiked } from "reducers";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    product: getVisibleProduct(state, ownProps.location.hash.replace("#", "")),
    isLiked: getIsProductLiked(state, ownProps.location.hash.replace("#", "")),
  };
};

let Recipe = ({ product, dispatch, isLiked }) => {
  return (
    <div className="recipe">
      <Figure product={product} />
      <Details product={product} dispatch={dispatch} isLiked={isLiked} />
      <Ingredients
        recipe={product.recipe}
        product={product}
        dispatch={dispatch}
      />
    </div>
  );
};

Recipe = withRouter(connect(mapStateToProps, null)(Recipe));

export default Recipe;
