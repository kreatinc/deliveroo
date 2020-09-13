import React from "react";
import icons from "../../../assets/img/icons.svg";
import LikeButton from "./LikeButton";
import RecipeInfo from "./RecipeInfo";

const RecipeDetails = ({
  product,
  addToLikeList,
  removeFromLikeList,
  isLiked,
  likes,
  fetchProduct,
  isFetching,
}) => {
  return (
    <div className="recipe__details">
      <div className="recipe__info">
        <span className="recipe__info-data recipe__info-data--minutes">
          {product.price}
        </span>
        <span className="recipe__info-text"> &#36;</span>
      </div>
      <RecipeInfo likes={likes} />
      {
        <LikeButton
          clickHandler={() => {
            if (!isLiked) {
              addToLikeList(product.id, isLiked);
            } else {
              removeFromLikeList(product.id, isLiked);
            }
            fetchProduct(product.id);
          }}
          isLiked={isLiked}
        ></LikeButton>
      }
    </div>
  );
};

export default RecipeDetails;
