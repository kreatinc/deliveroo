import React, { useEffect } from "react";
import Product from "./Product";

let List = ({
  shoppingList,
  getShoppingList,
  removeFromShoppingList,
  setErrors,
}) => {
  useEffect(() => {
    getShoppingList();
  }, []);
  return (
    <ul className="shopping__list">
      {shoppingList &&
        shoppingList.map((product) => (
          <Product
            product={product.details}
            setErrors={setErrors}
            key={product.key}
            clickHandler={() => removeFromShoppingList(product.key)}
          />
        ))}
    </ul>
  );
};

export default List;
