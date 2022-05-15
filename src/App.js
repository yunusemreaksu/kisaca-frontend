import { useState } from "react";

import NewsItem from "./components/News/NewsItem";
import Header from "./components/UI/Header";

import "./App.css";
import CommentInput from "./components/Comments/CommentInput";
import CommentList from "./components/Comments/CommentList";
import Card from "./components/UI/Card";

//const DUMMY_COMMENTS = [{ comment: "xyz" }, { comment: "abc" }];

function App() {
  const [comments, setComments] = useState([
    {
      text: "First comment",
      id: "c1",
    },
  ]);

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
    <div>
      <Header />
      {/* <NewsItem onAddComment={addCommentHandler} items={comments} /> */}
      <div>
        <section>
          {/* <CommentInput onAddComment={addCommentHandler} /> */}
          <NewsItem onAddComment={addCommentHandler} />
        </section>
        <section>{commentContent}</section>
      </div>
    </div>
  );
}

export default App;
