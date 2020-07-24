import React, { useEffect } from "react";
import Figure from "./Figure";
import Details from "./Details";
import Ingredients from "./Ingredients";
import { fetchProductLikes } from "actions";
import {
  getVisibleProduct,
  getIsProductLiked,
  getProductIngredients,
  getLikes,
  getProductComments,
} from "reducers";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Comments from "./Comments.jsx";
import Comment from "./Comment.jsx";
const mapStateToProps = (state, ownProps) => {
  return {
    product: getVisibleProduct(state, ownProps.location.hash.replace("#", "")),
    isLiked: getIsProductLiked(state, ownProps.location.hash.replace("#", "")),
    likes: getLikes(state, ownProps.location.hash.replace("#", "")),
    comments: getProductComments(
      state,
      ownProps.location.hash.replace("#", "")
    ),
    ingredients: getProductIngredients(
      state,
      ownProps.location.hash.replace("#", "")
    ),
  };
};

let Product = ({
  product,
  dispatch,
  isLiked,
  ingredients,
  likes,
  comments,
}) => {
  return (
    <div className="recipe">
      <Figure product={product} />
      <Details
        product={product}
        dispatch={dispatch}
        isLiked={isLiked}
        likes={likes}
      />
      <Ingredients
        ingredients={ingredients}
        product={product}
        dispatch={dispatch}
      />
      <Comments comments={comments} />
    </div>
  );
};

Product = withRouter(connect(mapStateToProps, null)(Product));

export default Product;
