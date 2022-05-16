import React, { useState } from "react";

import Header from "./components/UI/Header";
import NewsItem from "./components/News/NewsItem";
import CommentList from "./components/Comments/CommentList";

import "./App.css";
import CommentItem from "./components/Comments/CommentItem";

//const DUMMY_COMMENTS = [{ comment: "xyz" }, { comment: "abc" }];

function App() {
  const [comments, setComments] = useState([{}]);

  // const addCommentHandler = (comment) => {
  //   setComments((prevComments) => {
  //     return [comment, ...prevComments];
  //   });
  // };

  const addCommentHandler = (enteredComment) => {
    setComments((prevComments) => {
      const updatedComments = [...prevComments];
      updatedComments.unshift({
        text: enteredComment,
        id: Math.random().toString(),
      });
      return updatedComments;
    });
  };

  const deleteCommentItemHandler = (commentId) => {
    setComments((prevComments) => {
      const updatedComments = prevComments.filter(
        (comment) => comment.id !== commentId
      );
      return updatedComments;
    });
  };

  let commentContent = <p>Henüz hiç yorum yapılmamış.</p>;

  if (comments.length > 0) {
    commentContent = (
      <CommentList items={comments} onDeleteItem={deleteCommentItemHandler} />
    );
  }

  return (
    <React.Fragment>
      <Header />
      {/* <NewsItem onAddComment={addCommentHandler} items={comments} /> */}
      <div>
        <section>
          {/* <CommentInput onAddComment={addCommentHandler} /> */}
          <NewsItem onAddComment={addCommentHandler} />
        </section>
        {/* Comment için alttaki satır çalıştırıkacak */}
        {/* <section>{commentContent}</section>  */}
      </div>
    </React.Fragment>
  );
}

export default App;
