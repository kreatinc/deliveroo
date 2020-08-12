import React from "react";
import Product from "./Product";
const List = ({ products, location, clearSearchResults }) => {
  const currentProductId = location?.hash.replace("#", "") ?? 1;
  return (
    <ul className="results__list">
      {products.map((product) => {
        if (product.quantity > 0) {
          return (
            <Product
              product={product}
              isActive={+currentProductId === product.id}
              key={product.id}
              clearSearchResults={clearSearchResults}
            />
          );
        }
        return null;
      })}
    </ul>
  );
};

export default List;
