//DEACTIVE
// Server'dan alınan data buradaki object'e çekilebilir
import React, { useState } from "react";

import ExpandButton from "./ExpandButton";

const News = (props) => {
  const [readMore, setReadMore] = useState(false);

  const clickHandler = () => {
    setReadMore(!readMore);
  };

  const newsDate = new Date();
  const time = newsDate.toLocaleTimeString();
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  // const news = {
  //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

  //   time: newsTime,
  // };

  //props.onSaveNewsData(news);

  return (
    <div>
      <div>Saat: {time}</div>
      <div>{readMore ? text : `${text.substring(0, 200)}...`}</div>
      <button onClick={clickHandler}>
        {readMore ? "Read less" : "Read more"}
      </button>
    </div>
  );
};

export default News;
