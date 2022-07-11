import React, { useState } from "react";

import classes from "./Signup.module.css";

const Signup = (props) => {
  const [enteredNameSurname, setEnteredNameSurname] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const submittedData = {
      name: enteredNameSurname,
      email: enteredEmail,
      password: enteredPassword,
    };

    fetch("http://localhost:8080/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submittedData),
    })
      .then((response) => response.json())
      .then((submittedData) => {
        console.log("Success: ", submittedData);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });

    setEnteredNameSurname("");
    setEnteredEmail("");
    setEnteredPassword("");
  };

  const nameSurnameChangeHandler = (event) => {
    setEnteredNameSurname(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  return (
    <main className={classes.signup_page}>
      <h1 className={classes.signup_title}>Üye Ol</h1>
      <form className={classes.signup_form} onSubmit={submitHandler}>
        <input
          required
          type="text"
          name="name-surname"
          id="name-surname"
          placeholder="Ad - Soyad:"
          value={enteredNameSurname}
          onChange={nameSurnameChangeHandler}
        />
        <input
          required
          type="text"
          name="email"
          id="email"
          placeholder="E-mail:"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
        <input
          required
          type="text"
          name="password"
          id="password"
          minLength="6"
          placeholder="Şifre:"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
        <button type="submit" className={classes.btn_signup}>
          Kaydol
        </button>
      </form>
    </main>
  );
};

export default Signup;
