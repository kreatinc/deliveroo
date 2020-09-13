const runout = (state, action) => {
  switch (action.type) {
    case "FETCH_RUNOUT_PRODUCT":
      return state;
    case "FETCH_RUNOUT_PRODUCT_FAILURE":
      return state;
    default:
      return state;
  }
};

export default runout;
