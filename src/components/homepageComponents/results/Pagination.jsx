import React from "react";
import icons from "assets/img/icons.svg";
import { getPaginationData } from "reducers";
import { connect } from "react-redux";
import * as actions from "actions";
import { useParams } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    pagination: getPaginationData(state),
  };
};

let Pagination = ({ pagination, fetchProducts }) => {
  const { category } = useParams();
  const firstPage = pagination.currentPage - 1 !== 0;
  const lastPage = pagination.currentPage !== pagination.lastPage;
  return (
    <div className="results__pages">
      {category && firstPage && (
        <button
          className="btn-inline results__btn--prev"
          onClick={() => {
            fetchProducts(pagination.prevLink, category);
          }}
        >
          <svg className="search__icon">
            <use href={icons + "#icon-triangle-left"}></use>
          </svg>
          <span>Page {pagination.currentPage - 1}</span>
        </button>
      )}
      {category && lastPage && (
        <button
          className="btn-inline results__btn--next"
          onClick={() => {
            console.log("the page right is :", pagination.next);
            fetchProducts(pagination.nextLink, category);
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
