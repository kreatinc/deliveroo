import React from "react";
import Item from "./Item";
const List = ({ products, location }) => {
  const currentProductId = +location.hash.replace("#", "");
  return (
    <ul className="results__list">
      {products.map((product) => {
        return (
          <Item
            product={product}
            isActive={currentProductId === product.id}
            key={product.id}
          />
        );
      })}
    </ul>
  );
};

export default List;
