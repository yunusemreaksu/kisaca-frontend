import React, { useState } from "react";
import CommentInput from "../Comments/CommentInput";
import CommentList from "../Comments/CommentList";
import Card from "../UI/Card";
//import CommentBox from "../Comments/CommentBox";

import classes from "./NewsItem.module.css";
import NewsTime from "./NewsTime";

const NewsItem = (props) => {
  const [readMore, setReadMore] = useState(false);

  const clickHandler = () => {
    setReadMore(!readMore);
  };

  
  const newsText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  // const textLength = newsText.length;
  //const checkTextLength = textLength > 200 ? readMore : !readMore;

  const news = {
    text: newsText,
  };

  const transferDataHandler = (enteredComment) => {
    props.onAddComment(enteredComment);
  };

  return (
    <React.Fragment>
        <Card>
          <NewsTime />
          <div className={classes.text}>
            {readMore ? news.text : `${news.text.substring(0, 150)}...`}
          </div>
          <button className={classes.btn_expand} onClick={clickHandler}>
            {readMore ? "Kısaca oku" : "Devamını oku"}
          </button>
          {/* <CommentBox onSaveCommentData={transferDataHandler} /> */}
          {/* Comment için alttaki satır çalıştırılacak */}
          {/* <CommentInput onSaveCommentData={transferDataHandler} /> */}
        </Card>
    </React.Fragment>
  );
  
};

export default NewsItem;
