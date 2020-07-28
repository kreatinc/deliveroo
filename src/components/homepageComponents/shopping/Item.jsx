import React from "react";
import icons from "../../../assets/img/icons.svg";
import { removeItemFromShoppingList } from "actions";

const Item = ({ item, itemId, dispatch }) => {
  return (
    <li className="shopping__item">
      <p className="shopping__description">{item.title}</p>
      <button
        className="shopping__delete btn-tiny"
        onClick={() => {
          dispatch(removeItemFromShoppingList(itemId));
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
