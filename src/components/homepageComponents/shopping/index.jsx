import React from "react";
import List from "./List";
import Button from "components/Button";
import { getShoppingList } from "../../../store/reducers";
import * as actions from "../../../store/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    shoppingList: getShoppingList(state),
  };
};
let Shopping = ({ shoppingList, getShoppingList, removeFromShoppingList }) => {
  return (
    <div className="shopping">
      <h2 className="heading-2">My Shopping List</h2>
      <List
        shoppingList={shoppingList}
        getShoppingList={getShoppingList}
        removeFromShoppingList={removeFromShoppingList}
      />
      {shoppingList && shoppingList.length !== 0 && (
        <Button>Confirm order</Button>
      )}
    </div>
  );
};

Shopping = connect(mapStateToProps, actions)(Shopping);
export default Shopping;
