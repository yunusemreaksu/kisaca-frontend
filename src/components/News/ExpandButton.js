//Deactive
import React, { useState } from "react";

import classes from "./ExpandButton.module.css";

const ExpandButton = (props) => {
  const [readMore, setReadMore] = useState(true);

  const clickHandler = () => {
    setReadMore(!readMore);
  };
  return (
    <button className={classes.btn_expand} onClick={clickHandler}>
      {readMore ? "Read less" : "Read more"}
    </button>
  );
};

export default ExpandButton;
