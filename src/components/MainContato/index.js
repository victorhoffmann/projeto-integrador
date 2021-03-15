import './style.css'

const MainContato = () => {
    return (
        <>
            <div class="container">
                <div class="text">
                    Contato</div>
                <form action="#">
                    <div class="form-row names">
                        <div class="input-data">
                            <input type="text" required></input>
                            <div class="underline">
                            </div>
                            <label for="name">Primeiro nome.</label>
                        </div>
                        <div class="input-data">
                            <input type="text" required></input>
                            <div class="underline">
                            </div>
                            <label for="">Ultimo nome.</label>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="input-data">
                            <input type="text" required></input>
                            <div class="underline">
                            </div>
                            <label for="email">Endereço de E-mail.</label>
                        </div>
                        <div class="input-data">
                            <input type="text" required></input>
                            <div class="underline">
                            </div>
                            <label for="tel">Número de telefone. </label>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="input-data textarea">
                            <textarea rows="8" cols="80" required></textarea>
                            <br />
                            <div class="underline">
                            </div>
                            <label for="message">Escreva sua mensagem!</label>
                            <br />
                            <div class="form-row submit-btn">
                                <div class="input-data">
                                    <div class="inner"></div>
                                    <input type="submit" value="submit"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}

export default MainContato