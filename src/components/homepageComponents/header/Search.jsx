import React, { useEffect } from "react";
import search from "utils/search";
import { connect } from "react-redux";

let Search = ({ dispatch }) => {
  const inputEl = React.createRef();
  useEffect(() => {
    const subscription = search(dispatch);
    return () => subscription.unsubscribe();
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
