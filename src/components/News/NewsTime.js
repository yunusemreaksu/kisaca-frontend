import React from "react";

const NewsTime = (props) => {
  const newsDate = new Date();
  const newsTime = newsDate.toLocaleTimeString();

  return (
      <div>Saat: {newsTime}</div>
  )
};

export default NewsTime;
