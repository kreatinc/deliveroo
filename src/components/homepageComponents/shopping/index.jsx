import React from "react";
import List from "./List";
import Button from "components/Button";
import { getShoppingList } from "../../../store/reducers";
import * as actions from "../../../store/actions";
import { connect } from "react-redux";
import icons from "assets/img/icons.svg";

const mapStateToProps = (state) => {
  return {
    shoppingList: getShoppingList(state),
  };
};
let Shopping = ({
  shoppingList,
  getShoppingList,
  removeFromShoppingList,
  addCommand,
}) => {
  return (
    <div className="shopping">
      <h2 className="heading-2">My Shopping List</h2>
      <List
        shoppingList={shoppingList}
        getShoppingList={getShoppingList}
        removeFromShoppingList={removeFromShoppingList}
      />
      {shoppingList && shoppingList.length !== 0 && (
        <Button
          icon={icons + "#icon-check"}
          handleClick={() => {
            console.log(shoppingList);
            addCommand(shoppingList);
          }}
        >
          Confirm order
        </Button>
      )}
    </div>
  );
};

Shopping = connect(mapStateToProps, actions)(Shopping);
export default Shopping;
