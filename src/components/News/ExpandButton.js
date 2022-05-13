// Deactive
import React, { useState } from "react";

import classes from "./ExpandButton.module.css";

const ExpandButton = (props) => {
  const [readMore, setReadMore] = useState(false);

  const clickHandler = () => {
    setReadMore(!readMore);
  };
  return (
    <button className={classes.btn_expand} onClick={clickHandler}>
      {props.text ? "Read less" : "Read more"}
    </button>
  );
};

export default ExpandButton;
