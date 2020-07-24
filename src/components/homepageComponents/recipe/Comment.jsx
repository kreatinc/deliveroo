import React from "react";

const Comment = ({ comment }) => {
  return (
    <li>
      <a className="results__link results__link--active" href="#">
        <div className="results__data">
          <h4 className="results__name">{comment.client_name}</h4>
          <p className="results__author">{comment.comment}</p>
          <span className="results__time">
            Created at: {comment.created_at}
          </span>
        </div>
      </a>
    </li>
  );
};

export default Comment;
