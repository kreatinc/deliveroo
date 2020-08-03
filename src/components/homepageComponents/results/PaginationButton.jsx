import React from "react";
const PreviousPageButton = ({
  icons,
  clickHandler,
  pageNumber,
  isPrevious,
}) => {
  return (
    <button
      className={
        isPrevious
          ? "btn-inline results__btn--prev"
          : "btn-inline results__btn--next"
      }
      onClick={() => {
        clickHandler();
      }}
    >
      <svg className="search__icon">
        <use
          href={
            isPrevious
              ? icons + "#icon-triangle-left"
              : icons + "#icon-triangle-right"
          }
        ></use>
      </svg>
      <span>Page {pageNumber}</span>
    </button>
  );
};

export default PreviousPageButton;
