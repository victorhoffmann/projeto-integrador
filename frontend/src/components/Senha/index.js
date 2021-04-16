import './style.css'

const Senha = () => {
    return (
        <>
            <div className="containerSenha">
                <div className="headerForm">
                    <p>Apenas informe no campo a seguir o endereço de e-mail cadastrado e reenviaremos sua senha para o e-mail informado.</p>
                </div>
                <form action="#">
                    <div className="form-row names">
                        <div className="input-data">
                            <input type="text" required></input>
                            <div className="underline"></div>
                            <label for="name">E-mail:</label>
                        </div>
                    </div>

                    
                    <div className="form-row submit-btn__entrar btnsForms">
                        <div className="input-data btn-voltar">
                            <div className="inner"></div>
                            <a href="./login">
                                <input type="button" value="voltar"></input></a>
                        </div>
                        <div className="input-data btn-entrar">
                            <div className="inner"></div>
                            <input type="submit" value="entrar"></input>
                        </div>
                    </div>
                </form>
            </div>
            <div className="espacoFinalForm"></div>
        </>
    )
}

export default Senha