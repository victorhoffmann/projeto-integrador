import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import MinhaConta from "../pages/MinhaConta";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/contato" component={Contato} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/minhaConta" component={MinhaConta} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
