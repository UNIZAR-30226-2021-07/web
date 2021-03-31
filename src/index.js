import React from "react";
import process from "process";
import ReactDOM from "react-dom";
import { PopupboxContainer } from "react-popupbox";
import { HashRouter as Router } from "react-router-dom";

import "./style.css";
import "react-popupbox/dist/react-popupbox.css";

import reportWebVitals from "./reportWebVitals";

import App from "./App";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <PopupboxContainer />
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
