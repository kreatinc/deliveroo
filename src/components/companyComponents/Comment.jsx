import React from "react";
import { Columns } from "react-bulma-components/lib";

const Comment = ({ comment }) => {
  return (
    <ul>
      <li>
        <Columns>
          <Columns.Column className="is-2">
            <h6>{comment.created_at}</h6>
          </Columns.Column>
          <Columns.Column className="is-6">
            <h5>{comment.client_name}</h5>
          </Columns.Column>
          <Columns.Column>
            <h5>{comment.comment}</h5>
          </Columns.Column>
        </Columns>
      </li>
    </ul>
  );
};

export default Comment;
