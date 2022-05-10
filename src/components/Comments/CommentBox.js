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
    <form onSubmit={submitHandler} className={classes.form}>
      <input
        type="text"
        placeholder="Yorumunuzu yazın..."
        value={enteredComment}
        onChange={commentChangeHandler}
      />
      <button className={classes.submit_btn}>Submit</button>
    </form>
  );
};

export default CommentBox;
