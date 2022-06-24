import React from "react";

import classes from "./Signup.module.css";

const Signup = (props) => {
  return (
    <form className={classes.form}>
      <div>
        <input type="text" name="name-surname" required placeholder="Adınız - Soyadınız:" />
        <input type="text" name="email" required placeholder="E-mail Adresiniz:" />
        <input type="text" name="password" required minLength="6" placeholder="Şifreniz:" />
      </div>
      <button type="submit">Kaydol</button>
    </form>
  );
};

export default Signup;
