import React from "react";

const Figure = ({ product }) => {
  console.log("the product is ", product);
  return (
    <figure className="recipe__fig">
      <img src={product.image} alt={product.name} className="recipe__img" />
      <h1 className="recipe__title">
        <span>{product.description}</span>
      </h1>
    </figure>
  );
};

export default Figure;
