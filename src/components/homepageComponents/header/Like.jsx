import React from "react";
import { fetchProduct } from "actions";

const Like = ({ item, dispatch }) => {
  return (
    <li>
      <a
        className="likes__link"
        href={"#" + item.id}
        onClick={() => dispatch(fetchProduct(item.id))}
      >
        <figure className="likes__fig">
          <img src={item.image} alt={item.description} />
        </figure>
        <div className="likes__data">
          <h4 className="likes__name">{item.title}</h4>
          <p className="likes__author">{item.company.title}</p>
        </div>
      </a>
    </li>
  );
};

export default Like;
