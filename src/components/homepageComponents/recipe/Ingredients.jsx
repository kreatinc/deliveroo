import React from "react";
import Ingredient from "./Ingredient";
import icons from "../../../assets/img/icons.svg";
import { addToShoppingList, fetchProduct } from "../../../actions";
const Ingredients = ({ ingredients, product, dispatch }) => {
  if (ingredients) {
    return (
      <div className="recipe__ingredients">
        <ul className="recipe__ingredient-list">
          {ingredients.map((ingredient, i) => (
            <Ingredient
              ingredient={ingredient}
              dispatch={dispatch}
              product={product}
              key={i}
            />
          ))}
        </ul>

        <button
          className="btn-small recipe__btn"
          onClick={() => {
            dispatch(addToShoppingList(product));
            window.location.reload();
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
