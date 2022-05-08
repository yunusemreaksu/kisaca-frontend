import React, { useState } from "react";

import classes from "./ExpandButton.module.css";

const ExpandButton = (props) => {
  const [expandText, setExpandText] = useState(true);
  const [showButton, setShowButton] = useState(true);

  const handleClick = () => {
    setExpandText(!expandText);
    setShowButton(!showButton);
  };
  return (
    <button className={classes.button} onClick={handleClick}>
      Expand
    </button>
  );
};

export default ExpandButton;
