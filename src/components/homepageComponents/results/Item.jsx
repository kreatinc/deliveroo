import React from "react";

const Item = ({ product }) => {
  console.log("the product is :", product);
  return (
    <li>
      <a
        className="results__link results__link--active"
        href={"#" + product.id}
      >
        <figure className="results__fig">
          <img src={product.image} alt={product.description} />
        </figure>
        <div className="results__data">
          <h4 className="results__name">{product.title}</h4>
          <p className="results__author">{product.company.title}</p>
        </div>
      </a>
    </li>
  );
};

export default Item;
