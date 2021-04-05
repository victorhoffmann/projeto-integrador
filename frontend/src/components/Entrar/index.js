import "./style.css";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="headerForm">
          <p>Já é cadastrado?</p>
          Então entre com seus dados de login e senha.
        </div>
        <div className="bodyForm">
          E-mail e Senha são obrigatórios para login.
          <h3>Dados Pessoais</h3>
        </div>
        <form action="#">
          <div className="form-row names">
            <div className="input-data">
              <input type="text" required></input>
              <div className="underline"></div>
              <label for="name">E-mail:</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input type="password" required></input>
              <div className="underline"></div>
              <label for="email">Senha:</label>
            </div>
          </div>
          <div className="esqueci">
            <a href="./esqueci-senha">ESQUECI MINHA SENHA</a>
          </div>
          <div className="esqueci">
            <a href="./cadastro">CADASTRE-SE AQUI</a>
          </div>
          <div className="form-row submit-btn__entrar">
            <div className="input-data btn-voltar">
              <div className="inner"></div>
              <input href="./" type="submit" value="voltar"></input>
            </div>
            <div className="input-data btn-entrar">
              <div className="inner"></div>
              <input type="submit" value="entrar"></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
