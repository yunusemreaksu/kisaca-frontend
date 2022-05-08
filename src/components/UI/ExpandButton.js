import React, { useState } from "react";

import classes from "./ExpandButton.module.css";

const ExpandButton = (props) => {
  const [readMore, setReadMore] = useState(true);

  const clickHandler = () => {
    setReadMore(!readMore);
  };
  return (
    <button className={classes.button} onClick={clickHandler}>
      {readMore ? "Read more" : "Read less"}
    </button>
  );
};

export default ExpandButton;
