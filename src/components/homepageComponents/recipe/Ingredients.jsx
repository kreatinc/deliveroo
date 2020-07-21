import React from "react";
import Ingredient from "./Ingredient";
import icons from "../../../assets/img/icons.svg";
import { addToShoppingList } from "../../../actions";
const Ingredients = ({ recipe, product, dispatch }) => {
  if (recipe) {
    const recipeElements = recipe.replace("[", "").replace("]", "");
    const recipeArray = recipeElements.split(",");
    return (
      <div className="recipe__ingredients">
        <ul className="recipe__ingredient-list">
          {recipeArray.map((ingredient, i) => (
            <Ingredient ingredient={ingredient} key={i} />
          ))}
        </ul>

        <button
          className="btn-small recipe__btn"
          onClick={() => {
            dispatch(addToShoppingList(product));
          }}
        >
          <svg className="search__icon">
            <use href={icons + "#icon-shopping-cart"}></use>
          </svg>
          <span>Add to shopping list</span>
        </button>
      </div>
    );
  }
  return <p>Cannot find product</p>;
};

export default Ingredients;
