import React, { useState } from "react";

import classes from "./Login.module.css";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const submittedData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    setEnteredEmail("");
    setEnteredPassword("");
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  return (
    <main className={classes.login_page}>
      <h1 className={classes.login_title}>Giriş Yap</h1>
      <form className={classes.login_form} onSubmit={submitHandler}>
        <input
          required
          type="text"
          name="email"
          id="email"
          value={enteredEmail}
          placeholder="E-mail:"
          onChange={emailChangeHandler}
        />
        <input
          required
          type="text"
          name="password"
          id="password"
          value={enteredPassword}
          placeholder="Şifre:"
          onChange={passwordChangeHandler}
        />
        <button type="submit" className={classes.btn_login}>
          Giriş Yap
        </button>
      </form>
    </main>
  );
};

export default Login;
