import "./style.css";

const MainMinhaConta = () => {
  return (
    <>
      <h1>Minha Conta</h1>
      <h4>Você precisa ser cadastrado ou já ter um cadastro para continuar.</h4>
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
                  href="#"
                  onclick="window.open('./Reenvio/esqueciLogin.html', 'REENVIO_LOGIN','top=50,left=50,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=475,height=400'); return false"
                >
                  ESQUECI MEU LOGIN
                </a>
              </div>
              <div className="esqueci">
                <a
                  href="#"
                  onclick="window.open('./Reenvio/esqueciSenha.html', 'REENVIO_SENHA','top=50,left=50,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=475,height=400'); return false"
                >
                  ESQUECI MINHA SENHA
                </a>
              </div>
              <button type="submit" className="btn btn-entrar btn-success">
                ENTRAR
              </button>
              Entrar com a sua conta do Facebook ou Google:
              <div>
                <button type="submit" className="btn btn-entrarCom btn-primary">
                  Entrar com Facebook
                </button>
                <button type="submit" className="btn btn-entrarCom btn-danger">
                  Entrar com Google
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="signUp">
          <div className="headerForm">
            <p>Ainda não é cadastrado no site?</p>
            Faça agora mesmo o seu cadastro, é rápido!
          </div>
          <div className="bodyForm">
            Todos os campos são de preenchimento obrigatório.
            <h3>Dados Cadastrais</h3>
            <form>
              <div className="form-row">
                <div className="form-group col-md-9">
                  <label for="inputEmail2">E-MAIL:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail2"
                  ></input>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword2">CRIE SUA SENHA:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword2"
                  ></input>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputConfirmPassword">CONFIRME SUA SENHA:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputConfirmPassword"
                  ></input>
                </div>
                <div className="form-group col-md-9">
                  <label for="inputCpfOuCnpj">
                    CPF ou CNPJ (Apenas números):
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCpfOuCnpj"
                  ></input>
                </div>
                <div className=" form-group col-md-6">
                  <label for="inputCep">CEP:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputCep"
                  ></input>
                </div>
                <button type="submit" className="btn btn-cadastrar btn-success">
                  CADASTRAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default MainMinhaConta;
