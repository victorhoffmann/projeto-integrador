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
                <div className="produtoRow__containerQuantidade__qntTitle">
                    <h4>Quantidade</h4>
                </div>
                <div className="produtoRow__containerQuantidade__qntContainer">
                <button type="button" className="btn btn-secondary"> - </button>
                ?
                <button type="button" className="btn btn-secondary"> + </button>
                <p>Unidades</p>
                </div>
            </div>
            <div className="produtoRow__containerTotal">
                <div className="produtoRow__containerTotal__totalTitle">
                    <h4>Total</h4>
                </div>
                <div className="produtoRow__containerTotal__totalContainer">
                    <h5>R$ ??,??</h5>
                </div>
            </div>
            </div> 
            </div>

            <div className="valorDaCompraFinal">
            <h4>Valor</h4>
            <p>Total de produtos: R$ ??,??</p>
            <p>Frete: R$ ??,??</p>
            <div className="valorDaCompraFinal__finalRow">
            <p><b>Valor Total: R$ ??,??</b></p>
            <button type="button" class="btn btn-outline-danger">Finalizar compra</button>
            </div>

            </div>

        </>
    )

}

export default MainCarrinho