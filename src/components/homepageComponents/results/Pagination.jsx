import React from "react";
import icons from "assets/img/icons.svg";
import { getPaginationData, getSearchResults } from "reducers";
import { connect } from "react-redux";
import * as actions from "actions";
import { useParams } from "react-router-dom";
import PaginationButton from "./PaginationButton";

const mapStateToProps = (state) => {
  return {
    pagination: getPaginationData(state),
    searchResults: getSearchResults(state),
  };
};

let Pagination = ({ pagination, fetchProducts, searchResults }) => {
  const { category } = useParams();
  const firstPage = pagination.currentPage - 1 !== 0;
  const lastPage = pagination.currentPage !== pagination.lastPage;
  return (
    <div className="results__pages">
      {!searchResults && category && firstPage && (
        <PaginationButton
          isPrevious={true}
          icons={icons}
          pageNumber={pagination.currentPage - 1 || 1}
          clickHandler={() => fetchProducts(pagination.prevLink, category)}
        />
      )}
      {!searchResults && category && lastPage && (
        <PaginationButton
          isPrevious={false}
          icons={icons}
          pageNumber={pagination.currentPage + 1 || 1}
          clickHandler={() => fetchProducts(pagination.nextLink, category)}
        />
      )}
    </div>
  );
};

Pagination = connect(mapStateToProps, actions)(Pagination);

export default Pagination;
