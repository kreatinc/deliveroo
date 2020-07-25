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
  const firstPage = pagination.currentPage - 1 !== 0;
  const lastPage = pagination.currentPage !== pagination.lastPage;
  return (
    <div className="results__pages">
      {firstPage && (
        <button
          className="btn-inline results__btn--prev"
          onClick={() => {
            fetchProducts(pagination.prevLink);
          }}
        >
          <svg className="search__icon">
            <use href={icons + "#icon-triangle-left"}></use>
          </svg>
          <span>Page {pagination.currentPage - 1}</span>
        </button>
      )}
      {lastPage && (
        <button
          className="btn-inline results__btn--next"
          onClick={() => {
            console.log("the page right is :", pagination.next);
            fetchProducts(pagination.nextLink);
          }}
        >
          <span>Page {pagination.currentPage + 1}</span>
          <svg className="search__icon">
            <use href={icons + "#icon-triangle-right"}></use>
          </svg>
        </button>
      )}
    </div>
  );
};

Pagination = connect(mapStateToProps, actions)(Pagination);

export default Pagination;
