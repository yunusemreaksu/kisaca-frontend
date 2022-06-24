import React from "react";

import classes from "./Login.module.css";

const Login = (props) => {
  return (
    <form className={classes.form}>
      <div>
        <input type="text" name="email" required placeholder="E-mail:" />
        <input type="text" name="password" required placeholder="Şifre:" />
      </div>
      <button type="submit">Giriş Yap</button>
    </form>
  );
};

export default Login;
