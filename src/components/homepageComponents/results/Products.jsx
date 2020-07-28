import React, { useEffect } from "react";
import List from "./List";
import { getVisibleProducts, getIsFetching, getErrorMessage } from "reducers";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  return {
    products: getVisibleProducts(state, ownProps.match.params.category),
    isFetching: getIsFetching(state, ownProps.match.params.category),
    errorMessage: getErrorMessage(state, ownProps.match.params.category),
  };
};

let Products = ({
  products,
  isFetching,
  errorMessage,
  fetchProducts,
  match,
  location,
}) => {
  useEffect(() => {
    fetchProducts(null, match.params.category).then(() =>
      console.log("done !")
    );
  }, [match.params.category, fetchProducts]);
  if (isFetching) console.log("i am fetching the products");
  if (errorMessage) return <p>there was an error while fetching</p>;
  if (!match.params.category)
    return <h2 className="heading-2">Please select a category</h2>;
  return <List products={products} location={location} />;
};

Products = withRouter(connect(mapStateToProps, actions)(Products));

export default Products;
