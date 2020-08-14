import React from "react";
import icons from "assets/img/icons.svg";
import LikesInfo from "./LikesInfo";
const RecipeInfo = ({ likes }) => {
  return (
    <div className="recipe__info">
      <svg className="recipe__info-icon">
        <use href={icons + "#icon-man"}></use>
      </svg>
      <span className="recipe__info-data recipe__info-data--people">4</span>
      <span className="recipe__info-text"> servings</span>
      {<LikesInfo likes={likes} />}
    </div>
  );
};

export default RecipeInfo;
