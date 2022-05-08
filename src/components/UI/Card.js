import React from "react";

import classes from "./Card.module.css";
import NewsItem from "../News/NewsItem";
import ExpandButton from "./ExpandButton"


const Card = (props) => {
  return (
    <div className={classes.card}>
      <NewsItem />
      <ExpandButton />
    </div>
  );
};

export default Card;
