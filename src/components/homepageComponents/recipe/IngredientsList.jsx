import React from "react";
import Ingredient from "./Ingredient";
import icons from "../../../assets/img/icons.svg";
import { useFormik } from "formik";
import ErrorsContainer from "components/ErrorsContainer";

let maxQuantity;
const Ingredients = ({
  ingredients,
  product,
  addToShoppingList,
  fetchProduct,
  removeIngredient,
}) => {
  maxQuantity = product.quantity;
  const formik = useFormik({
    initialValues: {
      unit: 1,
    },
    validate,
  });

  if (ingredients) {
    return (
      <>
        <div className="recipe__ingredients">
          {" "}
          <span className="shopping__count">
            <input
              type="number"
              value={formik.values.unit}
              id="unit"
              name="unit"
              onChange={formik.handleChange}
              placeholder="1"
              max={product.quantity}
              min="1"
            />
          </span>
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
          {Object.keys(formik.errors).length !== 0 && (
            <ErrorsContainer errors={formik.errors} />
          )}
          {Object.keys(formik.errors).length === 0 && (
            <button
              className="btn-small recipe__btn"
              onClick={() => {
                addToShoppingList(product, formik.values.unit);
                fetchProduct(product.id);
              }}
            >
              <svg className="search__icon">
                <use href={icons + "#icon-shopping-cart"}></use>
              </svg>
              <span>Add to shopping list</span>
            </button>
          )}
        </div>
      </>
    );
  }
  return <p>Cannot find product</p>;
};

export default Ingredients;
const validate = (values) => {
  const errors = {};
  if (values.unit <= 0) {
    errors.unit = "bigger than 1";
  } else if (maxQuantity && values.unit > maxQuantity) {
    errors.unit = "more than the product quantity";
  }
  return errors;
};
