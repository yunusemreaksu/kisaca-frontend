//Deactive
//Server'dan alınan data buradaki object'e çekilebilir
import React from "react";

const News = (props) => {
  const newsDate = new Date();
  const newsTime = newsDate.toLocaleTimeString();
  const news = {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    time: newsTime,
  };
  props.onSaveNewsData(news);
  return (
    <div>
      <div>Saat: {news.time}</div>
      <div>{news.text}</div>
    </div>
  );
};

export default News;
