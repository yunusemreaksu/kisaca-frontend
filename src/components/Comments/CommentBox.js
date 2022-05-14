import React, { useState } from "react";
import UsersComments from "./UsersComments";

import classes from "./CommentBox.module.css";

const CommentBox = (props) => {
  const [enteredComment, setEnteredComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  const commentChangeHandler = (event) => {
    if (event.currentTarget.value.includes(" ")) {
      event.currentTarget.value = event.currentTarget.value.replace(/\s/g, "");
    }
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
    console.log(commentData);
    props.onSaveCommentData(commentData);
    setEnteredComment("");
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
        <UsersComments />
        <form className={classes.form} onSubmit={submitHandler}>
          <div>
            <input
              className={classes.input}
              type="text"
              required
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

export default CommentBox;
