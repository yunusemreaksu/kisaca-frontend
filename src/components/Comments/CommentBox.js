import React, { useState } from "react";

import classes from "./CommentBox.module.css";

const CommentBox = (props) => {
  const [enteredComment, setEnteredComment] = useState("");

  const commentChangeHandler = (event) => {
    setEnteredComment(event.target.value);
  };

  const commentId = Math.random().toString();
  const commentDate = new Date();
  const commentTime = commentDate.toLocaleTimeString();

  const submitHandler = (event) => {
    event.preventDefault();

    const commentData = {
      comment: enteredComment,
      date: commentDate,
      time: commentTime,
      id: commentId,
    };
    if (enteredComment === "") {
      return null;
    } else {
      setEnteredComment("");
    }
    console.log(commentData);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div>
        <label className={classes.label}>Yorum: </label>
        <input
          className={classes.input}
          type="text"
          placeholder="Yorumunuzu yazın..."
          value={enteredComment}
          onChange={commentChangeHandler}
        />
      </div>
      <button type="submit" className={classes.submit_btn}>
        Submit
      </button>
    </form>
  );
};

export default CommentBox;
