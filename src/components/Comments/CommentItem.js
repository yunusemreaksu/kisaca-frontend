//DEACTIVE

import React from "react";
import Card from "../UI/Card";

const CommentItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return <li onClick={deleteHandler}>{props.childrem}</li>;
};

export default CommentItem;
