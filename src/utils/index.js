import convertStringToArray from "./convertStringToArray";
import { v4 } from "uuid";
import _ from "lodash";

export const retrieveCommandFromShoppingList = (shoppingList, address) => {
  const generatedId = v4();
  return shoppingList.map((product, description) => ({
    product_id: product.details.id,
    quantity: product.details.quantity,
    recipe: convertStringToArray(product.details.recipe),
    description,
    price: product.details.price,
    address,
    command_group_id: generatedId,
  }));
};

export const groupItemsById = (commands) => {
  return _.chain(commands)
    .groupBy("command_group_id")
    .map(function (v, i) {
      return {
        commandGroupId: i,
        client: _.get(_.find(v, "client"), "client"),
        createdAt: _.get(_.find(v, "created_at"), "created_at"),
        address: _.get(_.find(v, "address"), "address"),
        product: _.map(v, "product"),
        delivery_state: _.map(v, "delivery_state"),
        quantity: _.map(v, "quantity").reduce((acc, curr) => acc + curr),
        price: _.map(v, "price").reduce((acc, curr) => acc + curr),
        description: _.map(v, "description"),
      };
    })
    .value();
};
