import React from "react";
import NewsItem from "./NewsItem";
import ExpandButton from "./ExpandButton";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <NewsItem />
      <ExpandButton />
    </div>
  );
};

export default Card;
