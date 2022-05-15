import { useState } from "react";

import NewsItem from "./components/News/NewsItem";
import Header from "./components/UI/Header";

import "./App.css";

const DUMMY_COMMENTS = [{ comment: "xyz" }, { comment: "abc" }];

function App() {
  const [comments, setComments] = useState(DUMMY_COMMENTS);

  const addCommentHandler = (comment) => {
    setComments((prevComments) => {
      return [comment, ...prevComments];
    });
  };

  return (
    <div>
      <Header />
      <NewsItem onAddComment={addCommentHandler} items={comments} />
    </div>
  );
}

export default App;
