import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./Pages/Home";
import NotFound from "./Pages/NotFound";

export default function App({ children }) {
  return (
    <>
      {children}
    </>
  );
}
