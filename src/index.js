import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

import Login from "./components/Users/Login";
import Signup from "./components/Users/Signup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/users/login" element={<Login />} />
      <Route path="/users/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);
