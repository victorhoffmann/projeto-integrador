import './style.css'
import headset1 from '../../assets/headset1.jpg'

const MainCarrinho = () => {
    return (
        <>
            <div className="title">
                <h2>Produtos adicionados ao carrinho </h2>
                <button type="button" class="btn btn-outline-danger">Remover todos os produtos</button>
            </div>

            <div className="produtoRow">
            <div className="produtoRow__containerProduto">
               
                    <img className="produtoRow__containerProduto__imagemProduto" src={headset1} alt="..." />
                
                <div className="produtoRow__containerProduto__texto">                   
                    <h3>RAZER - Kraken Ultimate</h3> 
                    <button type="button" class="btn btn-outline-danger">Remover produto</button>
                </div>
            </div>
                <div class="infosDaCompra">  
            <div className="produtoRow__containerQuantidade">
                <div className="produtoRow__containerQuantidade__qntContainer">
                
                    <h4>Quantidade:</h4>
                
                <button type="button" className="btn btn-secondary"> - </button>
                ?
                <button type="button" className="btn btn-secondary"> + </button>
                <p>Unidades</p>
                </div>
            </div>
            <div className="produtoRow__containerTotal">
                <div className="produtoRow__containerTotal__totalContainer">
                    <h4>Total:</h4>
                    <h6>R$ ??,??</h6>
                </div>                
            </div>
            </div> 
            </div>

            <div className="valorDaCompraFinal">
            <h4>Valor:</h4>
            <div className="underline"></div>
            <p>Total de produtos: R$ ??,??</p>
            <p>Frete: R$ ??,??</p>
            <div className="valorDaCompraFinal__finalRow">
            <p><b>Valor Total: R$ ??,??</b></p>
            <input type="submit" value="Finalizar compra"></input>
            </div>

            </div>

        </>
    )

}

export default MainCarrinho