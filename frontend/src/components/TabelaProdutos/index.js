import BtnExcluir from '../../components/BtnExcluir'
import BtnModificar from '../../components/BtnModificar'
import BtnVisualizar from '../../components/BtnVisualizar'
import BtnAdd from '../../components/BtnAdd'
import CardProdutoTable from '../../components/CardProdutoTable'
import './style.css'

const TabelaProdutos = () => {
    return (
        <div className="painelProdutos">
            <div className="pesquisaProdutos">
                <input class="form-control" type="text" placeholder="Procure o produto" readonly></input>
                <BtnAdd />
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
                            <BtnExcluir />&nbsp; 
                            <BtnModificar />&nbsp; 
                            <BtnVisualizar />&nbsp; 
                        </td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>Hyper X</td>
                        <td>
                            <BtnExcluir />&nbsp; 
                            <BtnModificar />&nbsp; 
                            <BtnVisualizar />&nbsp; 
                        </td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>Turtle Beach</td>
                        <td>
                            <BtnExcluir />&nbsp; 
                            <BtnModificar />&nbsp; 
                            <BtnVisualizar />&nbsp; 
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default TabelaProdutos