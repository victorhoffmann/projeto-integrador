import './style.css'

const Cadastrar = () => {
    return (
        <section className='formularios'>    
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
                    <button type="submit" className="btn btn-cadastrar btn-success">
                    CADASTRAR
                    </button>
                    <div className="buttonsForms">
                    <a href="./login" className='btn-small'><button type="button" className="btn btn-cadastrar btn-success">
                    VOLTAR
                    </button></a>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </section>
    )
}

export default Cadastrar