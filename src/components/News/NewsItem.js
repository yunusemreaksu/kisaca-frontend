import React, { useState } from "react";
import Card from "../UI/Card";
import CommentBox from "../Comments/CommentBox";
//import News from "./News";

import classes from "./NewsItem.module.css";

const NewsItem = (props) => {
  const [readMore, setReadMore] = useState(false);

  const clickHandler = () => {
    setReadMore(!readMore);
  };

  // --- News kullanılmayacaksa - BAŞLANGIÇ
  const newsText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const textLength = newsText.length;
  //const checkTextLength = textLength > 200 ? readMore : !readMore;
  const newsDate = new Date();
  const newsTime = newsDate.toLocaleTimeString();

  const news = {
    time: newsTime,
    text: newsText,
  };

  const transferDataHandler = () => {};

  return (
    <div>
      <Card>
        <div className={classes.time}>Saat: {news.time} </div>
        <div className={classes.text}>
          {readMore ? news.text : `${news.text.substring(0, 150)}...`}
        </div>
        <button className={classes.btn_expand} onClick={clickHandler}>
          {readMore ? "Kısaca oku" : "Devamını oku"}
        </button>
        <CommentBox onSaveCommentData={transferDataHandler} />
      </Card>
    </div>
  );
  // --- News kullanılmayacaksa - BİTİŞ

  // --- News kullanılacaksa - BAŞLANGIÇ
  // const saveNewsDataHandler = (newsDataFromNews) => {
  //   const newsData = {
  //     ...newsDataFromNews,
  //     id: Math.random().toString()
  //   }
  // }
  //   return (
  //     <div>
  //       <News onSaveNewsData={saveNewsDataHandler} />
  //       <button className={classes.btn_expand} onClick={clickHandler}>
  //         {readMore ? "Read less" : "Read more"}
  //       </button>
  //     </div>
  //   );
  // --- News kullanılacaksa - BİTİŞ
};

export default NewsItem;
