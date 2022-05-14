import React from "react";

import classes from "./NewsTime.module.css"

const NewsTime = (props) => {
  const newsDate = new Date();
  const newsTime = newsDate.toLocaleTimeString();

  return (
      <div className={classes.time}>Saat: {newsTime}</div>
  )
};

export default NewsTime;
