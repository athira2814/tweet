import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import CreateTweet from "./pages/CreateTweet";

ReactDOM.render(
  <Router>
    <Switch>
      <Route component={Home} path="/" exact></Route>
      <Route component={CreateTweet} path="/create" exact></Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);