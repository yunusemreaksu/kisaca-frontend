import React, { useEffect, useState } from "react";
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

  // const textLength = newsText.length;
  //const checkTextLength = textLength > 200 ? readMore : !readMore;

  const transferDataHandler = (enteredComment) => {
    props.onAddComment(enteredComment);
  };

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
        {/* Comment için alttaki satır çalıştırılacak */}
        {/* <CommentInput onSaveCommentData={transferDataHandler} /> */}
      </Card>
    </React.Fragment>
  );
};

export default NewsItem;
