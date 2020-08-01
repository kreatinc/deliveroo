import React from "react";
import Item from "./Item";
const List = ({ products, location, dispatch }) => {
  const currentProductId = location?.hash.replace("#", "") ?? 1;
  return (
    <ul className="results__list">
      {products.map((product) => {
        return (
          <Item
            product={product}
            isActive={+currentProductId === product.id}
            key={product.id}
            dispatch={dispatch}
          />
        );
      })}
    </ul>
  );
};

export default List;
