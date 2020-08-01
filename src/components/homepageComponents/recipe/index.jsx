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
  getSearchResults,
  getIsSearching,
} from "reducers";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Comments from "./Comments.jsx";
import { fetchCategories } from "actions";
import Category from "./Category";
import { getIsFetching } from "reducers/createList";
import icons from "assets/img/icons.svg";
import List from "../results/List";

const mapStateToProps = (state, ownProps) => {
  return {
    product: getVisibleProduct(state, ownProps.location.hash.replace("#", "")),
    isLiked: getIsProductLiked(state, ownProps.location.hash.replace("#", "")),
    likes: getLikes(state, ownProps.location.hash.replace("#", "")),
    comments: getProductComments(
      state,
      ownProps.location.hash.replace("#", "")
    ),
    searchResults: getSearchResults(state),
    isSearching: getIsSearching(state),
    isFetching: getIsFetching(state, ownProps.match.params.category),
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
  isSearching,
  searchResults,
}) => {
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  if (isSearching)
    return (
      <div className="load">
        <svg>
          <use href={icons + "#icon-cw"}></use>
        </svg>
      </div>
    );

  if (searchResults) {
    return <List dispatch={dispatch} products={searchResults}></List>;
  }

  if (match.params.category && product === undefined) {
    return (
      <h2 className="heading-2" style={{ marginTop: "50%" }}>
        Please select a product
      </h2>
    );
  }

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
