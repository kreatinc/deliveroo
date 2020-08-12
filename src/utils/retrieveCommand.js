import convertStringToArray from "./convertStringToArray";
import { v4 } from "uuid";
export const retrieveCommandFromShoppingList = (shoppingList, address) => {
  const generatedId = v4();
  return shoppingList.map((product) => ({
    product_id: product.details.id,
    quantity: product.details.quantity,
    description: product.details.recipe,
    price: product.details.price,
    address,
    command_group_id: generatedId,
  }));
};
