import './style.css'

const EntrarAdm = () => {
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

export default EntrarAdm