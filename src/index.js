import React from "react";
import ReactDOM from "react-dom";
import './Styles/sass/style.scss';

import App from "./App.jsx";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
