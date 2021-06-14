import BtnExcluir from '../Btns/BtnExcluir'
import BtnModificar from '../Btns/BtnModificar'
import BtnVisualizar from '../Btns/BtnVisualizar'

const TabelaProdutos = ( {produtos} ) => {
    return (
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
    )
}

export default TabelaProdutos