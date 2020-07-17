import React from "react";
import Item from "./Item";

const List = ({ products }) => {
  return (
    <ul className="results__list">
      {products.map((product) => (
        <Item name={product.name}></Item>
      ))}
    </ul>
  );
};

export default List;
