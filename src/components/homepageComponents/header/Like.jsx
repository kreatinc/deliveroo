import React from "react";
import { fetchProduct } from "store/actions";
import { useParams, Link } from "react-router-dom";

const Like = ({ product }) => {
  if (product) console.log("the product is :", product);

  return (
    <li>
      <Link
        className="likes__link"
        to={"/home/" + product.category_title + "#" + product.id}
      >
        <figure className="likes__fig">
          <img src={product.image} alt={product.description} />
        </figure>
        <div className="likes__data">
          <h4 className="likes__name">{product.title}</h4>
          <p className="likes__author">{product.company_title}</p>
        </div>
      </Link>
    </li>
  );
};

export default Like;
