import React, { useState } from "react";

import classes from "./CommentBox.module.css";

const CommentBox = (props) => {
  const [enteredComment, setEnteredComment] = useState("");
  const commentChangeHandler = (event) => {
    setEnteredComment(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const commentData = {
      comment: enteredComment,
    };
    setEnteredComment("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={enteredComment}
        className={classes.input}
        onChange={commentChangeHandler}
      />
      <button className={classes.submit_btn}>Submit</button>
    </form>
  );
};

export default CommentBox;
