import React from "react";
import Comment from "./Comment";

const Comments = ({ comments, currentUserId }) => {
  return (
    <ul className="results__list">
      {comments &&
        comments.map((comment) => (
          <Comment
            comment={comment}
            currentUserId={currentUserId}
            key={comment.id}
          />
        ))}
    </ul>
  );
};

export default Comments;
