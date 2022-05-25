//DEACTIVE

import React from "react";

import classes from "./CommentItem.module.css";

const CommentItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div id={props.id}>
      <li className={classes.comment_item}>{props.commentText}</li>
      <button className={classes.btn} onClick={deleteHandler}>Sil</button>
    </div>
  );
};

export default CommentItem;
