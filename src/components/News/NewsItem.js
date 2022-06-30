import React, { useState } from "react";

import Card from "../UI/Card";
// import CommentInput from "../Comments/CommentInput";
// import CommentList from "../Comments/CommentList";
// import NewsTime from "./NewsTime";

import classes from "./NewsItem.module.css";

const NewsItem = (props) => {
  const [comments, setComments] = useState([]);
  const [readMore, setReadMore] = useState(false);

  const clickHandler = () => {
    setReadMore(!readMore);
  };

  const addCommentHandler = (comments) => {
    setComments((prevCommentData) => {
      prevCommentData.concat(comments);
    });
  };

  // const transferDataHandler = (commentData) => {
  //   props.onAddComment(commentData);
  // };

  return (
    <React.Fragment>
      <Card>
        {/* <NewsTime /> */}
        <h1 className={classes.date}>{props.date}</h1>
        <h2 className={classes.time}>{props.time}</h2>
        <div className={classes.news_text}>
          {readMore ? props.newsText : `${props.newsText.substring(0, 150)}...`}
        </div>
        <button className={classes.btn_expand} onClick={clickHandler}>
          {readMore ? "Kısaca oku" : "Devamını oku"}
        </button>
        {/* <CommentBox onSaveCommentData={transferDataHandler} /> */}
        {/* <CommentList userComments={comments} /> */}
        {/* Comment için alttaki satır çalıştırılacak */}
        {/* <CommentInput onSaveCommentData={addCommentHandler} /> */}
      </Card>
    </React.Fragment>
  );
};

export default NewsItem;
