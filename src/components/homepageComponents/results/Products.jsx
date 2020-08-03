import React, { useEffect } from "react";
import List from "./List";
import {
  getVisibleProducts,
  getIsFetching,
  getErrorMessage,
  getSearchResults,
} from "store/reducers";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { withRouter } from "react-router-dom";
import icons from "assets/img/icons.svg";

const mapStateToProps = (state, ownProps) => {
  return {
    products: getVisibleProducts(state, ownProps.match.params.category),
    isFetching: getIsFetching(state, ownProps.match.params.category),
    searchResults: getSearchResults(state),
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
  searchResults,
}) => {
  useEffect(() => {
    fetchProducts(null, match.params.category).then(() =>
      console.log("done !")
    );
  }, [match.params.category, fetchProducts]);
  if (isFetching)
    return (
      <div className="load">
        <svg>
          <use href={icons + "#icon-cw"}></use>
        </svg>
      </div>
    );
  if (errorMessage) return <p>there was an error while fetching</p>;
  if (!match.params.category)
    return <h2 className="heading-2">Please select a category</h2>;
  if (!searchResults) return <List products={products} location={location} />;
  return <h2 className="heading-2">Please select a product</h2>;
};

Products = withRouter(connect(mapStateToProps, actions)(Products));

export default Products;
