import React, { useRef, useEffect } from "react";
import icons from "assets/img/icons.svg";
import Button from "components/Button";
import search from "utils/search";
import { connect } from "react-redux";

let Search = ({ searchProduct, dispatch }) => {
  const inputEl = React.createRef();
  useEffect(() => {
    search(dispatch);
  }, []);
  return (
    <form className="search">
      <input
        ref={inputEl}
        type="text"
        className="search__field"
        id="search__field"
        placeholder="Search over 1,000,000 products..."
      />
    </form>
  );
};

Search = connect(null, null)(Search);

export default Search;
