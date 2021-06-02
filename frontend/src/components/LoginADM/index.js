import React, { useState } from "react";
import axios from 'axios'
import { setToken } from '../../Helpers/session'
import { useHistory } from 'react-router-dom'
 
const LoginADM = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/admin', {email, senha})
      const token = response.data.token
      setToken(token)
      history.push('/painel-adm');

    } catch (error) {
      
    }
  };
    return (
        <>
          <section className="formularios">
            <div className="signIn">
              <div className="titleAdminLogin">
                <h2>Painel do Administrador</h2>
              </div>
              <div className="bodyForm">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-9">
                      <label for="inputLogin">EMAIL:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputLogin"
                        name="inputLogin"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      ></input>
                    </div>
                    <div className="form-group col-md-6">
                      <label for="inputPassword">SENHA:</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        name="inputPassword"
                        required
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div className="form-row submit-btn__entrar form-btns">
                    <div className="input-data btn-voltar">
                      <div className="inner"></div>
                      <a href="/">
                      <input type="button" value="voltar"></input></a>
                    </div>
                    <div className="input-data btn-entrar">
                      <button id='btn-adm-entrar' onClick={handleSubmit}>Entrar</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </section>
        </>
    )
}

export default LoginADM