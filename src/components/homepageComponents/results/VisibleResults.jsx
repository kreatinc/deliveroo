import React, { useEffect } from "react";
import List from "./List";
import { getVisibleTodos } from "reducers";
import { connect } from "react-redux";
import * as actions from "../../../actions";

const mapStateToProps = (state) => {
  return {
    products: getVisibleTodos(state),
  };
};

let VisibleRecipes = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts().then(() => console.log("done !"));
  }, []);
  return <List results={products} />;
};

VisibleRecipes = connect(mapStateToProps, actions)(VisibleRecipes);

export default VisibleRecipes;
