import React from "react";
import Figure from "./Figure";
import Details from "./Details";
import Ingredients from "./Ingredients";
const Recipe = () => {
  return (
    <div className="recipe">
      <Figure />
      <Details />
      <Ingredients />
    </div>
  );
};

export default Recipe;
