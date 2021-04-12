import React, { useState} from 'react'
import { useHistory } from 'react-router-dom'

import './style.css'

const EntrarAdm = () => {
  const history = useHistory()

  const handleSubmit = () => {
    history.push("/painel-adm")
  }
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
                      <label for="inputLogin">USUARIO:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputLogin"
                        name="inputLogin"
                      ></input>
                    </div>
                    <div className="form-group col-md-6">
                      <label for="inputPassword">SENHA:</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        name="inputPassword"
                      ></input>
                    </div>
                  </div>
                  <div className="form-row submit-btn__entrar form-btns">
                    <div className="input-data btn-voltar">
                      <div className="inner"></div>
                      <a href="./">
                      <input type="button" value="voltar"></input></a>
                    </div>
                    <div className="input-data btn-entrar">
                      {/* <div className="inner"></div> */}
                      <button className='btn-adm-entrar' onClick={handleSubmit}>Entrar</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </section>
        </>
    )
}

export default EntrarAdm