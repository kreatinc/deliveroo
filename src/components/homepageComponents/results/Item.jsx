import React from "react";
import { clearSearchResults } from "actions";
import { Link } from "react-router-dom";

const Item = ({ product, isActive, dispatch }) => {
  return (
    <li>
      <Link
        className={
          isActive
            ? "results__link results__link--active"
            : "results__link results__link"
        }
        to={product.category.title + "#" + product.id}
        onClick={() => {
          /*
            - if there is a dispatch function it means we have search results
          */
          if (dispatch) {
            dispatch(clearSearchResults());
          }
        }}
      >
        <figure className="results__fig">
          <img src={product.image} alt={product.description} />
        </figure>
        <div className="results__data">
          <h4 className="results__name">{product.title}</h4>
          <p className="results__author">{product.company.title}</p>
        </div>
      </Link>
    </li>
  );
};

export default Item;
