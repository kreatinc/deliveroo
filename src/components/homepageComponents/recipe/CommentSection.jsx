import React from "react";
import TextField from "../header/TextField";
import Button from "components/Button";
const inputRef = React.createRef();
const CommentSection = ({
  addComment,
  editComment,
  product,
  isEditing,
  commentId,
  setIsEditing,
}) => {
  return (
    <form className="comment" onSubmit={(e) => e.preventDefault()}>
      <TextField placeholder="Do you like this product ?" ref={inputRef} />
      <Button
        handleClick={() => {
          if (isEditing) {
            editComment(inputRef.current.value, product.id, commentId);
            setIsEditing(false);
          } else {
            addComment(inputRef.current.value, product.id);
          }
          inputRef.current.value = "";
        }}
      >
        Add comment
      </Button>
    </form>
  );
};

export default CommentSection;
export { inputRef };
