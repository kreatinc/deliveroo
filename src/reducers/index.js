import { combineReducers } from "@reduxjs/toolkit";
import createList, * as fromCreateList from "./createList";
import byId, * as fromById from "./byId";

const rootReducer = combineReducers({
  byId,
  createList,
});

export default rootReducer;

/* later we'll add a new reducer named 'productsByFilter' by which we will filter the products by the category
and we'll create a list for each category
*/

export const getVisibleProducts = (state) => {
  const ids = fromCreateList.getProductsIds(state.createList);
  return ids.map((id) => fromById.getProduct(state.byId, id));
};
