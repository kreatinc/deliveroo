const pagination = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        currentPage: action.meta.current_page,
        from: action.meta.from,
        to: action.meta.to,
        lastPage: action.meta.last_page,
        prevLink: action.links.prev,
        nextLink: action.links.next,
      };
    default:
      return state;
  }
};

export default pagination;

export const getPaginationData = (state) => {
  return state;
};
