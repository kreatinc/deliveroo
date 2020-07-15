import React from "react";
import Ingredient from "./Ingredient";

const Ingredients = () => {
  return (
    <div className="recipe__ingredients">
      <ul className="recipe__ingredient-list">
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
      </ul>

      <button className="btn-small recipe__btn">
        <svg className="search__icon">
          <use href="img/icons.svg#icon-shopping-cart"></use>
        </svg>
        <span>Add to shopping list</span>
      </button>
    </div>
  );
};

export default Ingredients;
