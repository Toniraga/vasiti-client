import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appreciation from "./pages/Appreciation";
import Stories from "./pages/Stories";
import Home from "./pages/home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/stories" component={Stories} />
        <Route path="/thank-you" component={Appreciation} />
      </Switch>
    </Router>
  );
};

export default Routes;
