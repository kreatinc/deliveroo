import React from "react";
import Comment from "./Comment";

const Comments = ({ comments }) => {
  return (
    <ul className="results__list">
      {comments &&
        comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
    </ul>
  );
};

export default Comments;
