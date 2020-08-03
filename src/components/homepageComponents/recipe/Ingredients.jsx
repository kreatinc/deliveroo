import React from "react";
import Ingredient from "./Ingredient";
import icons from "../../../assets/img/icons.svg";
const Ingredients = ({
  ingredients,
  product,
  addToShoppingList,
  fetchProduct,
  removeIngredient,
}) => {
  if (ingredients) {
    return (
      <div className="recipe__ingredients">
        <ul className="recipe__ingredient-list">
          {ingredients.map((ingredient, i) => (
            <Ingredient
              ingredient={ingredient}
              removeIngredient={removeIngredient}
              product={product}
              key={i}
            />
          ))}
        </ul>

        <button
          className="btn-small recipe__btn"
          onClick={() => {
            addToShoppingList(product);
            fetchProduct(product.id);
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
