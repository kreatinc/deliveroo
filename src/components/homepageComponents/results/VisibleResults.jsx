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

let VisibleProducts = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts().then(() => console.log("done !"));
  }, []);
  return <List products={products} />;
};

VisibleProducts = connect(mapStateToProps, actions)(VisibleProducts);

export default VisibleProducts;
