import React from "react";

const CommentItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return <li onClick={deleteHandler}>{props.childrem}</li>;
};

export default CommentItem;
