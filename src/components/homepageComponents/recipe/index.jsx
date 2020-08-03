import React, { useEffect } from "react";
import Figure from "./Figure";
import Details from "./Details";
import Ingredients from "./Ingredients";
import * as selectors from "reducers";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Comments from "./Comments.jsx";
import Category from "./Category";
import * as actions from "actions";
import icons from "assets/img/icons.svg";
import List from "../results/List";

const mapStateToProps = (state, ownProps) => {
  return {
    product: selectors.getVisibleProduct(
      state,
      ownProps.location.hash.replace("#", "")
    ),
    isLiked: selectors.getIsProductLiked(
      state,
      ownProps.location.hash.replace("#", "")
    ),
    likes: selectors.getLikes(state, ownProps.location.hash.replace("#", "")),
    comments: selectors.getProductComments(
      state,
      ownProps.location.hash.replace("#", "")
    ),
    searchResults: selectors.getSearchResults(state),
    isSearching: selectors.getIsSearching(state),
    isFetching: selectors.getIsFetching(state, ownProps.match.params.category),
    ingredients: selectors.getProductIngredients(
      state,
      ownProps.location.hash.replace("#", "")
    ),
    categories: selectors.getCategories(state),
  };
};

let Product = ({
  product,
  isLiked,
  likes,
  ingredients,
  comments,
  categories,
  match,
  isSearching,
  searchResults,
  fetchCategories,
  addToShoppingList,
  fetchProduct,
  removeIngredient,
  addToLikeList,
  clearSearchResults,
}) => {
  useEffect(() => {
    fetchCategories();
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
    return (
      <List
        clearSearchResults={clearSearchResults}
        products={searchResults}
      ></List>
    );
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
          addToLikeList={addToLikeList}
          isLiked={isLiked}
          likes={likes}
        />
        <Ingredients
          ingredients={ingredients}
          product={product}
          addToShoppingList={addToShoppingList}
          fetchProduct={fetchProduct}
          removeIngredient={removeIngredient}
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

Product = withRouter(connect(mapStateToProps, actions)(Product));

export default Product;
