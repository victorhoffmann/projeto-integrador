import RenderFotos from '../../Categoria_ID/RenderFotos'
import "./style.css"

const MainProduto = ({ produto }) => {
    return (

        <>
            <div className="infosProduto">
                <div className="infosProduto__carrossel">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={RenderFotos(produto.categoria_id)} alt="First slide"></img>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={RenderFotos(produto.categoria_id)} alt="Second slide"></img>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={RenderFotos(produto.categoria_id)} alt="Third slide"></img>
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
                        <h3>{produto.nome}</h3>
                        <div className="infosProduto__infos__preco">
                            <b>por: R${produto.preco}</b>
                        </div>
                        <div className="infosProduto__infos__qnt">
                            <b>Quantidade:</b>
                            <button type="button" className="btn btn-secondary" > - </button>
                            <input id="display" type="text" name="display" placeholder="0" readonly></input>
                            <button type="button" className="btn btn-secondary"> + </button>
                        </div>
                        <button type="button" className="btn btn-secondary btn_addCart">  <i className="fa fa-shopping-cart" aria-hidden="true"></i> ADICIONAR AO CARRINHO</button>
                        {/* <div className="infosProduto__infos__cep">

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
                        </div> */}
                    </div>
                    </div>
                    <div class="descricaoProduto">
                        <h2>Descrição:</h2>
                        <div class="descricaoProduto__container">
                        <p>{produto.descricao}</p>
                        </div>

                </div>
            
        </>
    )
}
export default MainProduto