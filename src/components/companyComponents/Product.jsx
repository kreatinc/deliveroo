import { Avatar } from "rsuite";
import React from "react";
import { Columns } from "react-bulma-components/lib";

const Product = ({ command }) => {
  return (
    <ul>
      <li>
        <Columns>
          <Columns.Column className="is-2">
            <Avatar circle size="md" src={command.product.image} />
          </Columns.Column>
          <Columns.Column className="is-6">
            <h3>{command.product.title}</h3>
          </Columns.Column>
          <Columns.Column>
            <h3>{command.quantity} Unit</h3>
          </Columns.Column>
        </Columns>
      </li>
    </ul>
  );
};

export default Product;
