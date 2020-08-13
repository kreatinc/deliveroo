import React, { useEffect, useState } from "react";
import Figure from "./Figure";
import Details from "./Details";
import Ingredients from "./Ingredients";
import * as selectors from "store/reducers";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Comments from "./Comments.jsx";
import Category from "./Category";
import * as actions from "store/actions";
import icons from "assets/img/icons.svg";
import List from "../results/List";
import { useAuthenticated } from "customHooks";
import CommentSection from "./CommentSection";

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
    commands: selectors.getCommands(state),
    isSearching: selectors.getIsSearching(state),
    isFetching: selectors.getIsFetching(state, ownProps.match.params.category),
    isFetchingCommands: selectors.getIsFetchingCommands(state),
    ingredients: selectors.getProductIngredients(
      state,
      ownProps.location.hash.replace("#", "")
    ),
    categories: selectors.getCategories(state),
    currentUserId: selectors.getCurrentUser(state),
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
  removeFromLikeList,
  clearSearchResults,
  addComment,
  currentUserId,
  removeComment,
  editComment,
  isFetchingCommands,
  commands,
}) => {
  const isAuthenticated = useAuthenticated();
  useEffect(() => {
    fetchCategories();
  }, []);

  const [isEditing, setIsEditing] = useState(false);
  const [commentId, setCommentId] = useState(null);

  if (isSearching)
    return (
      <div className="load">
        <svg>
          <use href={icons + "#icon-cw"}></use>
        </svg>
      </div>
    );

  if (isFetchingCommands) {
    return (
      <div className="load">
        <svg>
          <use href={icons + "#icon-cw"}></use>
        </svg>
      </div>
    );
  }

  if (searchResults) {
    return (
      <List
        clearSearchResults={clearSearchResults}
        products={searchResults}
      ></List>
    );
  }

  if (commands.length > 0) {
    return (
      <ul>
        {commands.map((command) => (
          <li>{command.command_group_id}</li>
        ))}
      </ul>
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
          removeFromLikeList={removeFromLikeList}
          isLiked={isLiked}
          fetchProduct={fetchProduct}
          likes={likes}
        />
        <Ingredients
          ingredients={ingredients}
          product={product}
          addToShoppingList={addToShoppingList}
          fetchProduct={fetchProduct}
          removeIngredient={removeIngredient}
        />
        <Comments
          comments={comments}
          currentUserId={currentUserId}
          product={product}
          removeComment={removeComment}
          setIsEditing={(val) => setIsEditing(val)}
          setCommentId={(val) => setCommentId(val)}
        />
        {isAuthenticated && (
          <CommentSection
            addComment={addComment}
            editComment={editComment}
            product={product}
            isEditing={isEditing}
            commentId={commentId}
            setIsEditing={(val) => setIsEditing(val)}
          />
        )}
      </div>
    );
  }

  return (
    <div className="category">
      {categories.map((category) => (
        <Category category={category} key={category.id} />
      ))}
    </div>
  );
};

Product = withRouter(connect(mapStateToProps, actions)(Product));

export default Product;
