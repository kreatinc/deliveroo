import { Avatar } from "rsuite";
import React from "react";
import { Columns } from "react-bulma-components/lib";

const Product = ({ product }) => {
  return (
    <ul>
      <li>
        <Columns>
          <Columns.Column className="is-2">
            <Avatar
              circle
              size="md"
              src="https://duckduckgo.com/i/1042c6c2.jpg"
            />
          </Columns.Column>
          <Columns.Column className="is-6">
            <h3>Tacos</h3>
          </Columns.Column>
          <Columns.Column>
            <h3>20 unit</h3>
          </Columns.Column>
        </Columns>
      </li>
    </ul>
  );
};

export default Product;
