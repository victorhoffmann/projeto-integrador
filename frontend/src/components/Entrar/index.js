import React, { useState } from "react";
import axios from 'axios'
import { setToken, setUser } from '../../Helpers/session'
import { useHistory } from 'react-router-dom'
import "./style.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();

  const handleVoltar = () => {
    history.push('/')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/admin', {email, senha})
      const token = response.data.token
      setToken(token)
      setUser(response.data.user)
      history.push('/')
      history.go(0)
    } catch (error) {
      
    }
  };

  return (
    <>
      <div className="container">
        <div className="bodyForm">
          <h3>Dados Pessoais</h3>
        </div>
        <form action="#">
          <div className="form-row names">
            <div className="input-data">
              <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
              <div className="underline"></div>
              <label for="name">E-mail:</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input type="password" required value={senha} onChange={(e) => setSenha(e.target.value)}></input>
              <div className="underline"></div>
              <label for="email">Senha:</label>
            </div>
          </div>
          <div className="esqueci">
            <a href="/esqueci-senha">ESQUECI MINHA SENHA</a>
          </div>
          <div className="esqueci">
            <a href="/cadastro">CADASTRE-SE AQUI</a>
          </div>
          <div id='formLogin'>
            <button className='btnsLogin' onClick={handleVoltar}>Voltar</button>
            <button className='btnsLogin' onClick={handleSubmit}>Entrar</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
