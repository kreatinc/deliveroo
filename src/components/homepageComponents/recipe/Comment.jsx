import React from "react";
import icons from "assets/img/icons.svg";
import Button from "components/Button";
const Comment = ({ comment, currentUserId }) => {
  return (
    <>
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
      {comment.client_id === currentUserId && (
        <button
          className="btn-options"
          onClick={() => {
            window.confirm("are you sure you want to delete this comment ?");
          }}
        >
          {" "}
          Delete
        </button>
      )}
      {comment.client_id === currentUserId && (
        <button className="btn-options" onClick={() => {}}>
          {" "}
          Edit
        </button>
      )}
    </>
  );
};

export default Comment;
