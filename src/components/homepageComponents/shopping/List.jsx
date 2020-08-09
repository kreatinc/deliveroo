import React, { useEffect } from "react";
import Product from "./Product";

let List = ({ shoppingList, getShoppingList, removeItemFromShoppingList }) => {
  useEffect(() => {
    getShoppingList();
  }, []);
  return (
    <ul className="shopping__list">
      {shoppingList &&
        shoppingList.map((product) => (
          <Product
            product={product.details}
            key={product.key}
            clickHandler={() => removeItemFromShoppingList(product.key)}
          />
        ))}
    </ul>
  );
};

export default List;
