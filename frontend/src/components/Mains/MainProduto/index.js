import React, {useState } from 'react'
import RenderFotos from '../../Categoria_ID/RenderFotos'
import "./style.css"

const MainProduto = ({ produto }) => {

    const [qnt, setQnt] = useState(1)

    const incNum = () => {
        setQnt(qnt + 1)
    }

    const decrNum = () => {
        qnt > 1 ? setQnt(qnt - 1) : setQnt(1)
    }

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
                            <button type="button" className="btn btn-secondary" onClick={decrNum}> - </button>
                            <input id="display" type="text" name="display" readOnly required value={qnt} onChange={(e) => setQnt(e.target.value)}></input>
                            <button type="button" className="btn btn-secondary" onClick={incNum}> + </button>
                        </div>
                        <button className="btn btn-secondary btn_addCart">  <i className="fa fa-shopping-cart" aria-hidden="true"></i> ADICIONAR AO CARRINHO</button>

                    </div>
                    </div>
                    <div className="descricaoProduto">
                        <h2>Descrição:</h2>
                        <div className="descricaoProduto__container">
                        <p>{produto.descricao}</p>
                        </div>

                </div>
            
        </>
    )
}
export default MainProduto