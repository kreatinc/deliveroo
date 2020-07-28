import React, { useRef } from "react";
import icons from "assets/img/icons.svg";
const Search = ({ searchProduct }) => {
  const inputEl = React.createRef();
  return (
    <form className="search">
      <input
        ref={inputEl}
        type="text"
        className="search__field"
        placeholder="Search over 1,000,000 products..."
      />
      <button
        className="btn search__btn"
        onClick={(e) => {
          e.preventDefault();
          searchProduct(inputEl.current.value);
        }}
      >
        <svg className="search__icon">
          <use href={icons + "#icon-magnifying-glass"}></use>
        </svg>
        <span>Search</span>
      </button>
    </form>
  );
};

export default Search;
