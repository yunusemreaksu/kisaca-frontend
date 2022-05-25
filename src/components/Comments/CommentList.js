//DEACTIVE

import React from "react";
import CommentItem from "./CommentItem";

import classes from "./CommentList.module.css";

const CommentList = (props) => {
  if (props.userComments.length === 0) {
    return <h1 className={classes.h1}>Henüz hiç yorum yapılmamış.</h1>;
  }

  return (
    <ol className={classes.ordered_list}>
      {props.userComments.map((userComment) => {
        return (
          <CommentItem
            id={userComment.id}
            key={userComment.id}
            // commentText={userComment.commentText}
          >
            {userComment.commentText}
          </CommentItem>
        );
      })}
    </ol>
  );
};

export default CommentList;
