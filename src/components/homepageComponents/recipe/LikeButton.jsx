import React from "react";
import icons from "assets/img/icons.svg";
import debounce from "lodash/debounce";
const LikeButton = ({ clickHandler, isLiked }) => {
  return (
    <button className="recipe__love" onClick={() => clickHandler()}>
      {
        <svg className="header__likes">
          <use
            href={
              isLiked ? icons + "#icon-heart" : icons + "#icon-heart-outlined"
            }
          ></use>
        </svg>
      }
    </button>
  );
};

export default LikeButton;
