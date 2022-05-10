import React from "react";

import classes from "./Card.module.css";
import NewsItem from "../News/NewsItem";
import ExpandButton from "./ExpandButton"
import CommentBox from "../Comments/CommentBox";


const Card = (props) => {
  return (
    <div className={classes.card}>
      <NewsItem />
      <ExpandButton />
      <CommentBox />
    </div>
  );
};

export default Card;
