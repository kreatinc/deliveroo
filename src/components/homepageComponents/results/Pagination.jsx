import React from "react";
const Pagination = () => {
  return (
    <div className="results__pages">
      <button className="btn-inline results__btn--prev">
        <svg className="search__icon">
          <use href="img/icons.svg#icon-triangle-left"></use>
        </svg>
        <span>Page 1</span>
      </button>
      <button className="btn-inline results__btn--next">
        <span>Page 3</span>
        <svg className="search__icon">
          <use href="img/icons.svg#icon-triangle-right"></use>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
