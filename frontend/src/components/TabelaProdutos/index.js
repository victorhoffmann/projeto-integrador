import './style.css'

const TabelaProdutos = () => {
    return (
        <div className="painelProdutos">
            <div className="pesquisaProdutos">
                <input class="form-control" type="text" placeholder="Procure o produto" readonly></input>
                <a href="#" ><button type="button" className="btn btn-primary">Adicionar</button></a>
            </div>
            <div className="tabelaItens">
                <table id="t01">
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Ações</th>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>Razer Kraken Ultimate</td>
                        <td>
                            <a href="#" ><button type="button" className="btn btn-danger">Excluir</button></a>&nbsp; 
                            <a href="#" ><button type="button" className="btn btn-success">Modificar</button></a>&nbsp; 
                            <a href="./produto" ><button type="button" className="btn btn-primary">Visualizar</button></a>&nbsp; 
                        </td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>Hyper X</td>
                        <td>
                            <a href="#" ><button type="button" className="btn btn-danger">Excluir</button></a>&nbsp; 
                            <a href="#" ><button type="button" className="btn btn-success">Modificar</button></a>&nbsp; 
                            <a href="./produto" ><button type="button" className="btn btn-primary">Visualizar</button></a>&nbsp; 
                        </td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>Turtle Beach</td>
                        <td>
                            <a href="#" ><button type="button" className="btn btn-danger">Excluir</button></a>&nbsp; 
                            <a href="#" ><button type="button" className="btn btn-success">Modificar</button></a>&nbsp; 
                            <a href="./produto" ><button type="button" className="btn btn-primary">Visualizar</button></a>&nbsp; 
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default TabelaProdutos