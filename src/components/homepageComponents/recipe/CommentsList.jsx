import React from "react";
import Comment from "./Comment";

const Comments = ({
  comments,
  currentUserId,
  product,
  removeComment,
  setIsEditing,
  setCommentId,
}) => {
  return (
    <ul className="results__list">
      {comments &&
        comments.map((comment, i) => (
          <Comment
            comment={comment}
            product={product}
            removeComment={removeComment}
            currentUserId={currentUserId}
            setIsEditing={setIsEditing}
            setCommentId={setCommentId}
            key={i}
          />
        ))}
    </ul>
  );
};

export default Comments;
