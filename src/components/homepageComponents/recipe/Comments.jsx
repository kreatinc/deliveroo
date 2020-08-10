import React from "react";
import Comment from "./Comment";

const Comments = ({ comments, currentUserId, product, removeComment }) => {
  return (
    <ul className="results__list">
      {comments &&
        comments.map((comment, i) => (
          <Comment
            comment={comment}
            product={product}
            removeComment={removeComment}
            currentUserId={currentUserId}
            key={i}
          />
        ))}
    </ul>
  );
};

export default Comments;
