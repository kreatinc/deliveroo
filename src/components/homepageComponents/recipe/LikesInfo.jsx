import React from "react";
import icons from "assets/img/icons.svg";

const LikesInfo = ({ likes }) => {
  return (
    <div className="recipe__info-buttons">
      {likes &&
        likes.map((_, i) => {
          if (i >= 5) return;
          return (
            <React.Fragment key={i}>
              <button className="btn-tiny">
                <svg>
                  <use href={icons + "#icon-heart"}></use>
                </svg>
              </button>
              <button className="btn-tiny">({likes && likes.length})</button>
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default LikesInfo;
