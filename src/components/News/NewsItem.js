import React from "react";
import News from "./News";

import classes from "./NewsItem.module.css";

const NewsItem = (props) => {
  const newsText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const newsDate = new Date();
  const newsTime = newsDate.toLocaleTimeString();

  return (
    <div>
      <div className={classes.time}>Saat: {newsTime} </div>
      <div className={classes.text}> {newsText} </div>
    </div>
  );

  // return (
  //   <div>
  //     <div className={classes.time}>Saat: {props.time} </div>
  //     <div className={classes.text}>{props.text}</div>
  //   </div>
  // );
};

export default NewsItem;
