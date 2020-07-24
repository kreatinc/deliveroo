import React, { useEffect } from "react";
import List from "./List";
import { getVisibleProducts, getIsFetching, getErrorMessage } from "reducers";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    products: getVisibleProducts(state),
    isFetching: getIsFetching(state),
    errorMessage: getErrorMessage(state),
  };
};

let Products = ({
  products,
  isFetching,
  errorMessage,
  fetchProducts,
  location,
}) => {
  useEffect(() => {
    fetchProducts().then(() => console.log("done !"));
  }, []);
  if (isFetching) console.log("i am fetching the products");
  if (errorMessage) return <p>there was an error while fetching</p>;
  return <List products={products} location={location} />;
};

Products = withRouter(connect(mapStateToProps, actions)(Products));

export default Products;
