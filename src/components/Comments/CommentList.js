//DEACTIVE

import React from "react";
import CommentItem from "./CommentItem";

import classes from "./CommentList.module.css";

const CommentList = (props) => {
  return (
      <ol className={classes.ordered_list}>
        {props.items.map((comment) => (
          <CommentItem
            key={comment.id}
            id={comment.id}
            onDelete={props.onDeleteItem}
          >
            {comment.text}
          </CommentItem>
        ))}
      </ol>
  );
};

export default CommentList;
