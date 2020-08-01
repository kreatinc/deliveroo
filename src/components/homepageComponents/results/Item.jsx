import React from "react";
import { clearSearchResults, fetchProduct } from "actions";

const Item = ({ product, isActive, dispatch }) => {
  return (
    <li>
      <a
        className={
          isActive
            ? "results__link results__link--active"
            : "results__link results__link"
        }
        href={product.category.title + "#" + product.id}
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
