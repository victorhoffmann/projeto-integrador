import './style.css'

const Login = () => {
    return (
        <>
          <section className="formularios">
            <div className="signIn">
              <div className="headerForm">
                <p>Já é cadastrado?</p>
                Então entre com seus dados de login e senha.
              </div>
              <div className="bodyForm">
                E-mail e Senha são obrigatórios para login.
                <h3>Dados Pessoais</h3>
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-9">
                      <label for="inputEmail">E-MAIL, CPF ou CNPJ:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                      ></input>
                    </div>
                    <div className="form-group col-md-6">
                      <label for="inputPassword">SUA SENHA:</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                      ></input>
                    </div>
                  </div>
                  <div className="esqueci">
                    <a
                      href="./esqueci-senha">
                      ESQUECI MINHA SENHA
                    </a>
                  </div>
                  <div className="esqueci">
                    <a
                      href="./cadastro">
                      CADASTRE-SE AQUI
                    </a>
                  </div>
                  <div className="buttonsForms">
                    <button type="submit" className="btn btn-entrar btn-success">
                      ENTRAR
                    </button>    
                    <a href="./" className='btn-small'><button type="button" className="btn btn-cadastrar btn-success">
                      VOLTAR
                    </button></a> 
                  </div>      
                </form>
              </div>
            </div>
        </section>
        </>
    )
}

export default Login