import { Avatar } from "rsuite";
import React from "react";
import { Columns } from "react-bulma-components/lib";

const Product = ({ item }) => {
  console.log("item :>> ", item);
  return (
    <ul>
      <li>
        <Columns>
          <Columns.Column className="is-2">
            <Avatar circle size="md" src={item.product.image} />
          </Columns.Column>
          <Columns.Column className="is-6">
            <h3>{item.product.title}</h3>
          </Columns.Column>
          <Columns.Column>
            <h3>id: {item.product.id}</h3>
          </Columns.Column>
          <Columns.Column>
            <h3>{item.quantity} Unit</h3>
          </Columns.Column>
        </Columns>
      </li>
    </ul>
  );
};

export default Product;
