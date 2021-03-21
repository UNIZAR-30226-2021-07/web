import React from 'react';
import ReactDOM from 'react-dom';
import { PopupboxContainer } from "react-popupbox";

import './index.css';
import "react-popupbox/dist/react-popupbox.css"

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <PopupboxContainer />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
