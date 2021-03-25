import Headset1 from "../../assets/headset1.jpg";
import "./style.css"

const MainProduto = () => {
    return (

        <>
            <div className="infosProduto">
                <div className="infosProduto__carrossel">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={Headset1} alt="First slide"></img>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Headset1} alt="Second slide"></img>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Headset1} alt="Third slide"></img>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    </div>
                    <div className="infosProduto__infos">
                        <h3>Nome do produto</h3>
                        <div className="infosProduto__infos__preco">
                            de: R$price
                            <b>por:R$price</b>
                        </div>
                        <div className="infosProduto__infos__qnt">
                            <b>Quantidade:</b>
                            <button type="button" className="btn btn-secondary" > - </button>
                            <input id="display" type="text" name="display" placeholder="0" readonly></input>
                            <button type="button" className="btn btn-secondary"> + </button>
                        </div>
                        <button type="button" className="btn btn-secondary btn_addCart">  <i className="fa fa-shopping-cart" aria-hidden="true"></i> ADICONARA AO CARRINHO</button>
                        <div className="infosProduto__infos__cep">

                            <div className="infosProduto__infos__cep__display">
                            CEP: <input type="text"></input>
                            </div>
                            <button type="button" className="btn btn-secondary btn_calcFrete">CALCULAR </button>

                            <div className="infosProduto__infos__cep__resultado">
                                <b>RESULTADO DO FRETE:</b>
                                <div className="infosProduto__infos__cep__resultado__infos">
                                <div className="infosProduto__infos__cep__resultado__infos__tipo">
                                <b>Tipo:</b>
                                    Sedex<br></br>
                                    PAC
                                </div>
                                <div className="infosProduto__infos__cep__resultado__infos__prazo">
                                <b>Prazo:</b>
                                    5 dias uteis<br></br>
                                    10 dias uteis
                                </div>
                                <div className="infosProduto__infos__cep__resultado__infos__valor">
                                <b>Valor:</b>
                                    R$15,00<br></br>
                                    R$10,00
                                </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="descricaoProduto">
                        <h2>Descrição:</h2>
                        <div class="descricaoProduto__container">
                        <p>Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Quem manda na minha terra sou euzis! Leite de capivaris, leite de mula manquis sem cabeça. Quem num gosta di mim que vai caçá sua turmis!</p>

<p>In elementis mé pra quem é amistosis quis leo. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.</p>

<p>Paisis, filhis, espiritis santis. Delegadis gente finis, bibendum egestas augue arcu ut est. Aenean aliquam molestie leo, vitae iaculis nisl. Cevadis im ampola pa arma uma pindureta.</p>

<p>Diuretics paradis num copo é motivis de denguis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Mé faiz elementum girarzis, nisi eros vermeio.</p>

<p>Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
                        </div>

                </div>
            
        </>
    )
}
export default MainProduto