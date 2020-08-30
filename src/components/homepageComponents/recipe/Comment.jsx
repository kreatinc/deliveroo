import React from "react";
import { inputRef } from "./CommentSection";

const Comment = ({
  comment,
  currentUserId,
  product,
  removeComment,
  setIsEditing,
  setCommentId,
}) => {
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
      {currentUserId && comment.client_id === currentUserId && (
        <button
          className="btn-options"
          onClick={() => {
            const confirm = window.confirm(
              "are you sure you want to delete this comment ?"
            );
            if (confirm) removeComment(comment.id, product.id);
          }}
        >
          {" "}
          Remove
        </button>
      )}
      {currentUserId && comment.client_id === currentUserId && (
        <button
          className="btn-options-edit"
          onClick={() => {
            inputRef.current.value = comment.comment;
            setIsEditing(true);
            setCommentId(comment.id);
          }}
        >
          {" "}
          Edit
        </button>
      )}
    </>
  );
};

export default Comment;
