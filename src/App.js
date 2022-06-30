import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "./components/UI/Header";
// import CommentList from "./components/Comments/CommentList";
// import CommentItem from "./components/Comments/CommentItem";

import "./App.css";
import NewsList from "./components/News/NewsList";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8080/api/main/")
      .then((res) => res.json())
      .then((data) => {
        setData(data.news);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Haberler yükleniyor...</p>;
  }

  if (error || !Array.isArray(data)) {
    return <p>There was an error loading your data!</p>;
  }

  // const [loadedNews, setLoadedNews] = useState([]);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   const sendRequest = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8080/api/main/");

  //       const responseData = await response.json();

  //       if (!response.ok) {
  //         throw new Error(responseData.message);
  //       }
  //       setLoadedNews(responseData.newsText);
  //     } catch (err) {
  //       setError(err.message);
  //     }
  //   };
  //   sendRequest();
  // }, []);

  // const newsText =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  // const addCommentHandler = (comment) => {
  //   setComments((prevComments) => {
  //     return [comment, ...prevComments];
  //   });
  // };

  // const addCommentHandler = (enteredComment) => {
  //   setComments((prevComments) => {
  //     const updatedComments = [...prevComments];
  //     updatedComments.unshift({
  //       text: enteredComment,
  //       id: Math.random().toString(),
  //     });
  //     return updatedComments;
  //   });
  // };

  //  const addCommentHandler = (commentData) => {
  //    setComments((prevCommentData) => {prevCommentData.concat(commentData)})
  //  };

  // const deleteCommentItemHandler = (commentId) => {
  //   setComments((prevComments) => {
  //     const updatedComments = prevComments.filter(
  //       (comment) => comment.id !== commentId
  //     );
  //     return updatedComments;
  //   });
  // };

  // let commentContent = <p>Henüz hiç yorum yapılmamış.</p>;

  // if (comments.length > 0) {
  //   commentContent = (
  //     <CommentList items={comments} onDeleteItem={deleteCommentItemHandler} />
  //   );
  // }

  return (
    <React.Fragment>
      <Header />
      {/* <NewsItem onAddComment={addCommentHandler} items={comments} /> */}
      <div>
        <section>
          {/* <CommentInput onAddComment={addCommentHandler} /> */}
          <NewsList items={data} />
          {/* <CommentList userComments={comments} /> */}
        </section>
        {/* Comment için alttaki satır çalıştırılacak */}
        {/* <section>{commentContent}</section>  */}
      </div>
    </React.Fragment>
  );
};

export default App;
