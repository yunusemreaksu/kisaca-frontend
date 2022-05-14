import React from "react";

import classes from "./Header.module.css";

const Header = () => {
  const header = "Kısaca";
  const date = new Date();
  const headerDate = date.toLocaleDateString();

  return (
    <div>
      <h1 className={classes.header}> {header} </h1>
      <h2 className={classes.headerDate}> {headerDate} </h2>
      <button hidden className={classes.btn_signup}>Üye Ol</button>
      <button hidden className={classes.btn_login}>Giriş yap</button>
    </div>
  );
};

export default Header;
