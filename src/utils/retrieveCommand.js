import convertStringToArray from "./convertStringToArray";
import { v4 } from "uuid";
// TODO: enhance this functions logic
export const retrieveCommandFromShoppingList = (shoppingList) => {
  let i = 1;
  const quantities = {};
  const description = {};
  const price = {};

  shoppingList
    .sort((product1, product2) => {
      return parseFloat(product1.details.id) - parseFloat(product2.details.id);
    })
    .map((product) => ({
      product_id: product.details.id,
      recipe: product.details.recipe,
      price: product.details.price,
    }))
    .reduce((acc, curr) => {
      if (curr.product_id === acc.product_id) {
        quantities[curr.product_id] = ++i;
        description[curr.product_id] = [
          ...(description[curr.product_id] || []),
          convertStringToArray(curr.recipe),
        ];
        price[curr.product_id] = curr.price;
      } else {
        // in this case it's a new product
        i = 0;
        quantities[curr.product_id] = 1;
        description[curr.product_id] = convertStringToArray(curr.recipe);
        price[curr.product_id] = curr.price;
      }
      return curr;
    });

  return {
    quantity: quantities,
    description,
    price,
    command_group_id: v4(),
  };
};
