import React from "react";
import Item from "./Item";

const List = ({ products }) => {
  return (
    <ul className="results__list">
      {products.map((product) => {
        return <Item product={product} key={product.id}></Item>;
      })}
    </ul>
  );
};

export default List;
