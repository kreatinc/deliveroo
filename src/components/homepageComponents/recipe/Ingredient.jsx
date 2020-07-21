import React from "react";
import icons from "../../../assets/img/icons.svg";
const Ingredient = ({ ingredient }) => {
  return (
    <li className="recipe__item">
      <svg className="recipe__icon">
        <use href={icons + "#icon-check"}></use>
      </svg>
      {/* <div className="recipe__count">1/4</div> */}
      <div className="recipe__ingredient">
        {/* <span className="recipe__unit">cup</span> */}
        {ingredient}
      </div>
    </li>
  );
};

export default Ingredient;
