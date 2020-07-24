import React from "react";
import icons from "assets/img/icons.svg";
import { getPaginationData } from "reducers";
import { connect } from "react-redux";
import * as actions from "actions";

const mapStateToProps = (state) => {
  return {
    pagination: getPaginationData(state),
  };
};

let Pagination = ({ pagination, fetchProducts }) => {
  return (
    <div className="results__pages">
      <button className="btn-inline results__btn--prev">
        <svg className="search__icon">
          <use href={icons + "#icon-triangle-left"}></use>
        </svg>
        <span>Page {pagination.from}</span>
      </button>
      <button className="btn-inline results__btn--next">
        <span>Page {pagination.to}</span>
        <svg className="search__icon">
          <use href={icons + "#icon-triangle-right"}></use>
        </svg>
      </button>
    </div>
  );
};

Pagination = connect(mapStateToProps, actions)(Pagination);

export default Pagination;
