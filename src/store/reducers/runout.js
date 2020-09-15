const runout = (state = [], action) => {
  switch (action.type) {
    case "FETCH_RUNOUT_PRODUCT":
      const nextState = [];
      Object.keys(action.response.entities.products).forEach((key) =>
        nextState.push(action.response.entities.products[key])
      );
      return nextState;
    case "FETCH_RUNOUT_PRODUCT_FAILURE":
      return state;
    default:
      return state;
  }
};

export default runout;

export const getRunOutProducts = (state) => state;
