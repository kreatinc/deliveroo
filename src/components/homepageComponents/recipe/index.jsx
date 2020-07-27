import React, { useEffect } from "react";
import Figure from "./Figure";
import Details from "./Details";
import Ingredients from "./Ingredients";
import {
  getVisibleProduct,
  getIsProductLiked,
  getProductIngredients,
  getLikes,
  getProductComments,
  getCategories,
} from "reducers";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Comments from "./Comments.jsx";
import { fetchCategories } from "actions";
import Category from "../header/Category";

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
    categories: getCategories(state),
  };
};

let Product = ({
  product,
  dispatch,
  isLiked,
  ingredients,
  likes,
  comments,
  categories,
  match,
}) => {
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  if (categories) console.log("cat are :", categories);
  if (match.params.category) {
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
  }
  return (
    <div className="category">
      {categories.map((category) => (
        <Category category={category} />
      ))}
    </div>
  );
};

Product = withRouter(connect(mapStateToProps, null)(Product));

export default Product;
