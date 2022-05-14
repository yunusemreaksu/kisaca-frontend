import React from "react";

import classes from "./UsersComments.module.css";

const UsersComments = (props) => {
  return (
    <ol>
      <li> {props.item} </li>
    </ol>
  );
};

export default UsersComments;
