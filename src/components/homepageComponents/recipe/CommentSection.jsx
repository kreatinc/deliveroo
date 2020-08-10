import React from "react";
import TextField from "../header/TextField";
import Button from "components/Button";

const CommentSection = ({ addComment, product }) => {
  const inputEl = React.createRef();
  return (
    <form className="comment" onSubmit={(e) => e.preventDefault()}>
      <TextField placeholder="Do you like this product ?" ref={inputEl} />
      <Button
        handleClick={() => {
          addComment(inputEl.current.value, product.id);
          inputEl.current.value = "";
        }}
      >
        Add comment
      </Button>
    </form>
  );
};

export default CommentSection;
