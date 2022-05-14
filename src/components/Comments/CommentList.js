//DEACTIVE

import React from "react";

import classes from "./CommentList.module.css";

const CommentList = (props) => {
  return (
    <ol>
      <li> {props.item} </li>
    </ol>
  );
};

export default CommentList;
