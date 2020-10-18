import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import HomePage from "./Pages/Home";

export default function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}
