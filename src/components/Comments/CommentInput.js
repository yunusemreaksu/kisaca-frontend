//DEACTIVE

import React, { useState } from "react";

import classes from "./CommentInput.classes.css";

const CommentInput = (props) => {
  const [enteredComment, setEnteredComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  const commentChangeHandler = (event) => {
    if (event.currentTarget.value.includes(" ")) {
      event.currentTarget.value = event.currentTarget.value.replace(/\s/g, "");
    }
    setEnteredComment(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const commentId = Math.random().toString();
    const commentDate = new Date();
    const commentTime = commentDate.toLocaleTimeString();

    const commentData = {
      comment: enteredComment,
      date: commentDate,
      time: commentTime,
      id: commentId,
    };

    props.onSaveCommentData(enteredComment);
    setEnteredComment("");
    console.log(commentData);
  };

  const showCommentsButtonClickHandler = (event) => {
    setShowComments(!showComments);
  };

  return (
    <div>
      <button onClick={showCommentsButtonClickHandler}>
        {showComments ? "Yorumları gizle" : "Yorumları göster"}
      </button>
      <div hidden={showComments ? false : true}>
        <form className={classes.form} onSubmit={submitHandler}>
          <div>
            <textarea
              className={classes.textarea}
              name="textarea"
              type="text"
              required
              rows="7"
              cols="40"
              placeholder="Yorumunuzu yazın..."
              value={enteredComment}
              onChange={commentChangeHandler}
            />
          </div>
          <button type="submit" className={classes.submit_btn}>
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentInput;
