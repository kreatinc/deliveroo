import React from "react";
import Pagination from "./Pagination";
import Products from "./Products";

let Result = () => {
  return (
    <div className="results">
      <Products />
      <Pagination />
    </div>
  );
};

export default Result;
