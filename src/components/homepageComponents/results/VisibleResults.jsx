import React, { useEffect } from "react";
import List from "./List";
import { getVisibleProducts, getIsFetching, getErrorMessage } from "reducers";
import { connect } from "react-redux";
import * as actions from "../../../actions";

const mapStateToProps = (state) => {
  return {
    products: getVisibleProducts(state),
    isFetching: getIsFetching(state),
    errorMessage: getErrorMessage(state),
  };
};

let VisibleProducts = ({
  products,
  isFetching,
  errorMessage,
  fetchProducts,
}) => {
  useEffect(() => {
    fetchProducts().then(() => console.log("done !"));
  }, []);
  if (isFetching) console.log("i am fetching the products");
  if (errorMessage) return <p>there was an error while fetching</p>;
  return <List products={products} />;
};

VisibleProducts = connect(mapStateToProps, actions)(VisibleProducts);

export default VisibleProducts;
