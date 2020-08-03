import React from "react";
import icons from "../../../assets/img/icons.svg";
import LikeButton from "./LikeButton";
import RecipeInfo from "./RecipeInfo";
const RecipeDetails = ({ product, addToLikeList, isLiked, likes }) => {
  return (
    <div className="recipe__details">
      <div className="recipe__info">
        <svg className="recipe__info-icon">
          <use href={icons + "#icon-stopwatch"}></use>
        </svg>
        <span className="recipe__info-data recipe__info-data--minutes">45</span>
        <span className="recipe__info-text"> minutes</span>
      </div>
      <RecipeInfo likes={likes} />
      <LikeButton
        clickHandler={() => {
          addToLikeList(product);
        }}
        isLiked={isLiked}
      ></LikeButton>
    </div>
  );
};

export default RecipeDetails;
