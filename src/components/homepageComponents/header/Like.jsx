import React from "react";

import { Link } from "react-router-dom";

const Like = ({ product, clearCommands }) => {
  return (
    <li>
      <Link
        className="likes__link"
        to={"/home/" + product.category.title + "#" + product.id}
        onClick={() => clearCommands()}
      >
        <figure className="likes__fig">
          <img src={product.image} alt={product.description} />
        </figure>
        <div className="likes__data">
          <h4 className="likes__name">{product.title}</h4>
          <p className="likes__author">{product.company.title}</p>
        </div>
      </Link>
    </li>
  );
};

export default Like;
