import React, { useEffect } from "react";
import Item from "./Item";
import { getShoppingList } from "../../../reducers";
import * as actions from "../../../actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    shoppingList: getShoppingList(state),
  };
};

let List = ({ shoppingList, dispatch }) => {
  useEffect(() => {
    dispatch(actions.getShoppingList());
  }, []);
  return (
    <ul className="shopping__list">
      {shoppingList &&
        shoppingList.map((item) => (
          <Item
            item={item.details}
            itemId={item.key}
            key={item.key}
            dispatch={dispatch}
          />
        ))}
    </ul>
  );
};

List = connect(mapStateToProps, null)(List);

export default List;
