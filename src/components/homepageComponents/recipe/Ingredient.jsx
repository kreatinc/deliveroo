import React from "react";
import icons from "../../../assets/img/icons.svg";
import { removeIngredient } from "../../../actions";
const Ingredient = ({ ingredient, dispatch, product }) => {
  return (
    <li className="recipe__item">
      <button
        className="btn-tiny"
        onClick={() => dispatch(removeIngredient(ingredient, product.id))}
      >
        <svg className="recipe__icon">
          <use href={icons + "#icon-circle-with-cross"}></use>
        </svg>
      </button>
      {/* <div className="recipe__count">1/4</div> */}
      <div className="recipe__ingredient">
        {/* <span className="recipe__unit">cup</span> */}
        {ingredient}
      </div>
      {/* <span className="shopping__count">
        <input type="number" placeholder="1" step="1" max="3" min="1" />
        <p>unit</p>
      </span> */}
    </li>
  );
};

export default Ingredient;
