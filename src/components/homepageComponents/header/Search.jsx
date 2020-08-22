import React, { useEffect } from "react";
import TextField from "./TextField";
const Search = ({ searchProduct }) => {
  const inputEl = React.createRef();
  useEffect(() => {
    const subscription = searchProduct();
    return () => subscription.unsubscribe();
  }, []);
  return (
    <form className="search">
      <TextField
        placeholder="Search over 1,000,000 products..."
        ref={inputEl}
      />
    </form>
  );
};

export default Search;
