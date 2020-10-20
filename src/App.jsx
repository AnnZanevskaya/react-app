import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./Pages/Home";
import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/search' component={HomePage} />
        <Route path='/film/:id' component={HomePage} />
        <Route path='*'><NotFound/></Route>
      </Switch>
    </Router>
  );
}
