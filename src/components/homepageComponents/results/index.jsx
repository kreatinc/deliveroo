import React from "react";
import Pagination from "./Pagination";
import VisibleRecipes from "./VisibleResults";

const Result = () => {
  return (
    <div className="results">
      <VisibleRecipes />
      <Pagination />
    </div>
  );
};

export default Result;
