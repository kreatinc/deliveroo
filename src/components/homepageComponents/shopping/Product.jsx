import React from "react";
import icons from "../../../assets/img/icons.svg";

const Product = ({ clickHandler, product }) => {
  return (
    <>
      <li className="shopping__item">
        <p className="shopping__description">{product.title}</p>
        <button
          className="shopping__delete btn-tiny"
          onClick={() => {
            clickHandler();
          }}
        >
          <svg>
            <use href={icons + "#icon-circle-with-cross"}></use>
          </svg>
        </button>
      </li>
    </>
  );
};

export default Product;
