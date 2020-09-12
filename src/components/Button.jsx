import React from "react";

const Button = ({ handleClick, icon, children }) => {
  return (
    <button className="btn btn__search" onClick={handleClick}>
      {icon && (
        <svg className="search__icon">
          <use href={icon}></use>
        </svg>
      )}
      <span>{children}</span>
    </button>
  );
};

export default Button;
