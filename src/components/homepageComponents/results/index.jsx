import React from "react";
import List from "./List";
import Pagination from "./Pagination";

const Result = () => {
  return (
    <div className="results">
      <List />
      <Pagination />
    </div>
  );
};

export default Result;
