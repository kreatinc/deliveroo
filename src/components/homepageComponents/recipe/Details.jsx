import React from "react";
import icons from "../../../assets/img/icons.svg";
const RecipeDetails = () => {
  return (
    <div className="recipe__details">
      <div className="recipe__info">
        <svg className="recipe__info-icon">
          <use href={icons + "#icon-stopwatch"}></use>
        </svg>
        <span className="recipe__info-data recipe__info-data--minutes">45</span>
        <span className="recipe__info-text"> minutes</span>
      </div>
      <div className="recipe__info">
        <svg className="recipe__info-icon">
          <use href={icons + "#icon-man"}></use>
        </svg>
        <span className="recipe__info-data recipe__info-data--people">4</span>
        <span className="recipe__info-text"> servings</span>

        <div className="recipe__info-buttons">
          <button className="btn-tiny">
            <svg>
              <use href={icons + "#icon-heart"}></use>
            </svg>
          </button>
          <button className="btn-tiny">
            <svg>
              <use href={icons + "#icon-heart"}></use>
            </svg>
          </button>
        </div>
      </div>
      <button className="recipe__love" onClick={() => alert("hello world")}>
        <svg className="header__likes">
          <use href={icons + "#icon-heart-outlined"}></use>
        </svg>
      </button>
    </div>
  );
};

export default RecipeDetails;
