import React from "react";

import classes from "./NewsTime.module.css";

const newsDate = new Date();
const newsTime = newsDate.toLocaleTimeString();

const NewsTime = (props) => {
  return <div className={classes.time}>Saat: {newsTime}</div>;
};

export default NewsTime;
