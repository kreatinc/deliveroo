import React from "react";
import icons from "assets/img/icons.svg";
import LikesInfo from "./LikesInfo";
const RecipeInfo = ({ likes }) => {
  return <div className="recipe__info">{<LikesInfo likes={likes} />}</div>;
};

export default RecipeInfo;
