import React, { useEffect } from "react";
import List from "./List";
import { getVisibleProducts } from "reducers";
import { connect } from "react-redux";
import * as actions from "../../../actions";

const mapStateToProps = (state) => {
  return {
    products: getVisibleProducts(state),
  };
};

let VisibleRecipes = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts().then(() => console.log("done !"));
  }, []);
  return <List products={products} />;
};

VisibleRecipes = connect(mapStateToProps, actions)(VisibleRecipes);

export default VisibleRecipes;
