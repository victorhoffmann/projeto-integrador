import "./style.css";

const MainContato = () => {
  return (
    <>
      <div className="container">
        <div className="text">Contato</div>
        <form action="#">
          <div className="form-row names">
            <div className="input-data">
              <input type="text" required></input>
              <div className="underline"></div>
              <label for="name">Primeiro nome.</label>
            </div>
            <div className="input-data">
              <input type="text" required></input>
              <div className="underline"></div>
              <label for="">Ultimo nome.</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input type="text" required></input>
              <div className="underline"></div>
              <label for="email">Endereço de E-mail.</label>
            </div>
            <div className="input-data">
              <input type="text" required></input>
              <div className="underline"></div>
              <label for="tel">Número de telefone. </label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data textarea">
              <textarea rows="8" cols="80" required></textarea>
              <br />
              <div className="underline"></div>
              <label for="message">Escreva sua mensagem!</label>
              <br />
            </div>
            <div className="form-row submit-btn">
              <div className="input-data">
                <div className="inner"></div>
                <input type="submit" value="submit"></input>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default MainContato;
