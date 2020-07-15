import React from "react";

const Ingredient = () => {
  return (
    <li className="recipe__item">
      <svg className="recipe__icon">
        <use href="img/icons.svg#icon-check"></use>
      </svg>
      <div className="recipe__count">1/4</div>
      <div className="recipe__ingredient">
        <span className="recipe__unit">cup</span>
        fresh basil, chopped or torn
      </div>
    </li>
  );
};

export default Ingredient;
