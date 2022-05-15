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

    props.onSaveComment(enteredComment);
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

export default CommentInput;
