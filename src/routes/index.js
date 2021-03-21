import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Senha from "../pages/Login/ReenvioSenha";
import Faq from "../pages/Faq";
import TodosProdutos from "../pages/TodosProdutos";
import Carrinho from "../pages/Carrinho"

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/faq" component={Faq} />
        <Route path="/todosprodutos" component={TodosProdutos} />
        <Route path="/contato" component={Contato} />
        <Route path="/carrinho" component={Carrinho} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/login" component={Login} />
        <Route path="/esqueci-senha" component={Senha} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
