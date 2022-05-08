import React from "react";

import classes from "./Header.module.css";

const Header = () => {
  const date = new Date();
  const headerDate = date.toLocaleDateString();

  return (
    <div>
      <h1>Kısaca</h1>
      <h2> {headerDate} </h2>
    </div>
  );
};

export default Header;
