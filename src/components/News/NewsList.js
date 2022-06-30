import React from "react";
import NewsItem from "./NewsItem";

import classes from "./NewsList.module.css";

const NewsList = (props) => {
  return (
    <ul className={classes.news_list}>
      {props.items.map((item) => (
        <NewsItem
          key={item.id}
          id={item.id}
          date={item.date}
          time={item.time}
          newsText={item.newsText}
        />
      ))}
    </ul>
  );
};

export default NewsList;
