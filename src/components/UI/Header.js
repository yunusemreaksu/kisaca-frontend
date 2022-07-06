import React from "react";

import classes from "./Header.module.css";

const Header = () => {
  const header = "Kısaca";
  const date = new Date();
  const headerDate = date.toLocaleDateString();

  return (
    <header className={classes.header}>
      <div className={classes.header_left}>
        <h1 className={classes.header_name}> {header} </h1>
        <h2 className={classes.header_date}> {headerDate} </h2>
      </div>
      <div className={classes.header_right}>
        <button className={classes.btn_signup}>
          <a href="users/signup">Üye ol</a>
        </button>
        <button className={classes.btn_login}>
          <a href="users/login">Giriş yap</a>
        </button>
      </div>
    </header>
  );
};

export default Header;
