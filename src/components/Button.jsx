import React from "react";

const Button = ({ handleClick, icons, children }) => {
  return (
    <button className="btn search__btn" onClick={handleClick}>
      {icons && (
        <svg className="search__icon">
          <use href={icons + "#icon-magnifying-glass"}></use>
        </svg>
      )}
      <span>{children}</span>
    </button>
  );
};

export default Button;
