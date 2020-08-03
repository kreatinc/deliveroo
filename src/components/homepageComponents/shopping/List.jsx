import React, { useEffect } from "react";
import Product from "./Product";
import { getShoppingList } from "../../../reducers";
import * as actions from "../../../actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    shoppingList: getShoppingList(state),
  };
};

let List = ({
  shoppingList,
  getShoppingListRequest,
  removeItemFromShoppingList,
}) => {
  useEffect(() => {
    getShoppingListRequest();
  }, []);
  return (
    <ul className="shopping__list">
      {shoppingList &&
        shoppingList.map((product) => (
          <Product
            product={product.details}
            key={product.key}
            clickHandler={() => removeItemFromShoppingList(product.key)}
          />
        ))}
    </ul>
  );
};

List = connect(mapStateToProps, actions)(List);

export default List;
