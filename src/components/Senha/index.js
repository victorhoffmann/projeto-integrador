const Senha = () => {
    return (
        <section className='formularios'>    
            <div className="signUp">
            <div className="headerForm">
                <p>Apenas informe no campo a seguir o endereço de e-mail cadastrado e reenviaremos sua senha para o e-mail informado.</p>
            </div>
            <div className="bodyForm">
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
                    <button type="submit" className="btn btn-cadastrar btn-success">
                    ENVIAR
                    </button>
                </div>
                </form>
            </div>
            </div>
        </section>
    )
}

export default Senha