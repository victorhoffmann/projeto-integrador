import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Senha from "../pages/ReenvioSenha";
import Faq from "../pages/Faq";
import TodosProdutos from "../pages/TodosProdutos";
import Headsets from "../pages/Headsets";
import Monitores from "../pages/Monitores";
import Mouses from "../pages/Mouses";
import MousePads from "../pages/MousePads";
import Teclados from "../pages/Teclados";
import Carrinho from "../pages/Carrinho"
import Produto from '../pages/Produto'
import PainelADM from '../pages/PainelADM'
import Admin from '../pages/Admin'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/faq" component={Faq} />
        <Route path="/painelAdm" component={PainelADM} />
        <Route path="/admin" component={Admin} />
        <Route path="/produto" component={Produto} />
        <Route path="/todosprodutos" component={TodosProdutos} />
        <Route path="/headsets" component={Headsets} />
        <Route path="/monitores" component={Monitores} />
        <Route path="/mouses" component={Mouses} />
        <Route path="/mousepads" component={MousePads} />
        <Route path="/teclados" component={Teclados} />
        <Route path="/contato" component={Contato} />
        <Route path="/carrinho" component={Carrinho} />
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
