import React, { useEffect } from "react";

const Search = ({ searchProduct }) => {
  const inputEl = React.createRef();
  useEffect(() => {
    const subscription = searchProduct();
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

export default Search;
