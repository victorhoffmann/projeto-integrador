import './style.css'

const Cadastrar = () => {
    return (
        <div className="container">
            <div className="headerForm">
                <p>Ainda não é cadastrado no site?</p>
          Faça agora mesmo o seu cadastro, é rápido!
        </div>
            <div className="bodyForm">
                Todos os campos são de preenchimento obrigatório.
          <h3>Dados Pessoais</h3>
            </div>
            <form action="#">
                <div className="form-row names">
                    <div className="input-data">
                        <input type="email" required></input>
                        <div className="underline"></div>
                        <label for="email">E-mail:</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-data">
                        <input type="password" required></input>
                        <div className="underline"></div>
                        <label for="senha">Crie sua senha:</label>
                    </div>
                </div>

                <div className="form-row">
                    <div className="input-data">
                        <input type="password" required></input>
                        <div className="underline"></div>
                        <label for="senha">Confirme sua senha:</label>
                    </div>
                </div>

                <div className="form-row">
                    <div className="input-data">
                        <input type="number" required></input>
                        <div className="underline"></div>
                        <label for="inputCpfOuCnpj">CPF ou CNPJ (Apenas números):</label>
                    </div>
                </div>

                <div className="form-row submit-btn__entrar">
                    <div className="input-data btn-voltar">
                        <div className="inner"></div>
                        <a href="./login">
                            <input type="button" value="voltar"></input></a>
                    </div>
                    <div className="input-data btn-entrar">
                        <div className="inner"></div>
                        <input type="submit" value="Cadastrar"></input>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Cadastrar