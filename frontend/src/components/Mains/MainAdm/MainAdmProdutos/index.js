import BtnAdd from '../../../Btns/BtnAdd'
import BtnExcluir from '../../../Btns/BtnExcluir'
import BtnModificar from '../../../Btns/BtnModificar'
import BtnVisualizar from '../../../Btns/BtnVisualizar'
import { removeToken, removeUser} from '../../../../Helpers/session'

const MainAdmProdutos = ( { produtos }) => {
    const handleLogout = () => {
        removeToken()
        removeUser()
      }

    return (
        <div className="mainAdm">
            <div className="headerAdm">
                <h4>Produtos</h4>
                <a href="/admin" ><button onClick={handleLogout} className="btn btn-outline-danger">Sair <i class="fas fa-sign-out-alt" aria-hidden="true"></i></button></a>
            </div>
            <div className="painelProdutos">
            <div className="pesquisaProdutos">
                <input class="form-control" type="text" placeholder="Procure o produto" readonly />
                <BtnAdd />
            </div>
            <div className="tabelaItens">
                <table id="t01">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    { produtos.map((produto, index) => (
                        <tr className={`item-${produto.id}`}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>
                                <BtnExcluir produto={produto} />&nbsp;
                                <BtnModificar produto={produto.id}/>&nbsp;
                                <BtnVisualizar produto={produto.id} />&nbsp;
                            </td>
                        </tr>
                    ))}     
                </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}

export default MainAdmProdutos