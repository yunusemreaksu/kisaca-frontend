import React, { useState } from "react";

import CommentInput from "../Comments/CommentInput";
import CommentList from "../Comments/CommentList";
import Card from "../UI/Card";
import NewsTime from "./NewsTime";
//import CommentBox from "../Comments/CommentBox";

import classes from "./NewsItem.module.css";

const NewsItem = (props) => {
  // const COMMENT_DATA = [{ id: "c1", commentText: "test comment" }];

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


  // const textLength = newsText.length;
  //const checkTextLength = textLength > 200 ? readMore : !readMore;

  // const transferDataHandler = (commentData) => {
  //   props.onAddComment(commentData);
  // };

  return (
    <React.Fragment>
      <Card>
        <NewsTime />
        <div className={classes.text}>
          {readMore ? props.item : `${props.item.substring(0, 150)}...`}
        </div>
        <button className={classes.btn_expand} onClick={clickHandler}>
          {readMore ? "Kısaca oku" : "Devamını oku"}
        </button>
        {/* <CommentBox onSaveCommentData={transferDataHandler} /> */}
        <CommentList userComments={comments} />
        {/* Comment için alttaki satır çalıştırılacak */}
        <CommentInput onSaveCommentData={addCommentHandler} />
      </Card>
    </React.Fragment>
  );
};

export default NewsItem;
