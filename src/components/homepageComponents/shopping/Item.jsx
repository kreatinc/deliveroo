import React from "react";
import icons from "../../../assets/img/icons.svg";
import { removeItemFromShoppingList } from "actions";

const Item = ({ item, dispatch }) => {
  return (
    <li className="shopping__item">
      <div className="shopping__count">
        <input type="number" value="500" step="100" />
        <p>g</p>
      </div>
      <p className="shopping__description">{item.name}</p>
      <button
        className="shopping__delete btn-tiny"
        onClick={() => {
          dispatch(removeItemFromShoppingList(item.key));
        }}
      >
        <svg>
          <use href={icons + "#icon-circle-with-cross"}></use>
        </svg>
      </button>
    </li>
  );
};

export default Item;
