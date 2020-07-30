import React, { useRef } from "react";
import icons from "assets/img/icons.svg";
import Button from "components/Button";
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
      <Button
        handleClick={(e) => {
          e.preventDefault();
          searchProduct(inputEl.current.value);
          inputEl.current.value = "";
        }}
        icons={icons}
      >
        Search
      </Button>
    </form>
  );
};

export default Search;
