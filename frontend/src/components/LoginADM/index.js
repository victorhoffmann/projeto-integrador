import React, { useState } from "react";
import axios from 'axios'
import { setToken } from '../../Helpers/session'
import { useHistory } from 'react-router-dom'
import './style.css'
 
const LoginADM = () => {
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
      response.data.user.id_funcao === 1 ? history.push('/painel-adm') : alert('Você não é ADMIN')
    } catch (error) {
      
    }
  };
    return (
        <>
          <section className="formularios">
            <div className="signInAdmin">
              <div className="titleAdminLogin">
                <h2>Painel do Administrador</h2>
              </div>
              <div className="bodyFormAdmin">
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
                  <div id='formLoginAdm'>
                      <button className='btnsAdmin' onClick={handleVoltar}>Voltar</button>
                      <button className='btnsAdmin' onClick={handleSubmit}>Entrar</button>
                  </div>
                </form>
              </div>
            </div>
        </section>
        </>
    )
}

export default LoginADM