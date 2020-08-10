import React from "react";
import icons from "assets/img/icons.svg";
import debounce from "lodash/debounce";
const LikeButton = ({ clickHandler, isLiked }) => {
  console.log("isLiked inside the button is :", isLiked);
  return (
    <button
      className="recipe__love"
      onClick={debounce(() => clickHandler(), 2000)}
    >
      <svg className="header__likes">
        <use
          href={
            isLiked ? icons + "#icon-heart" : icons + "#icon-heart-outlined"
          }
        ></use>
      </svg>
    </button>
  );
};

export default LikeButton;
