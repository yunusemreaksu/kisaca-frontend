import React, { useState } from "react";

import classes from "./CommentBox.module.css";

const CommentBox = (props) => {
  const [entredComment, setEnteredComment] = useState("");
  const commentChangeHandler = (event) => {
    setEnteredComment(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className={classes.input}
        onChange={commentChangeHandler}
      />
      <button className={classes.submitbtn}>Submit</button>
    </div>
  );
};

export default CommentBox;
