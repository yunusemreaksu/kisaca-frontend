import React, { useState } from "react";

import Header from "./components/UI/Header";
import NewsItem from "./components/News/NewsItem";
import CommentList from "./components/Comments/CommentList";
import CommentItem from "./components/Comments/CommentItem";

import "./App.css";

//const DUMMY_COMMENTS = [{ comment: "xyz" }, { comment: "abc" }];

function App() {
  const [comments, setComments] = useState([{}]);

  const newsText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

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
          <NewsItem onAddComment={addCommentHandler} item={newsText} />
        </section>
        {/* Comment için alttaki satır çalıştırıkacak */}
        {/* <section>{commentContent}</section>  */}
      </div>
    </React.Fragment>
  );
}

export default App;
