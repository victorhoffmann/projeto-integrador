import BtnExcluir from '../../Btns/BtnExcluir'
import BtnModificar from '../../Btns/BtnModificar'
import BtnVisualizar from '../../Btns/BtnVisualizar'

const CardProdutoTable = ({ ...produto }) => {
    const { id, nome, categoria_id, preco, descricao, qnt_disponivel } = produto;
    return (
        <tr>
            <td>{id}</td>
            <td>{nome}</td>
            <td>
                <BtnExcluir id={id} nome={nome}/>&nbsp;
                <BtnModificar id={id} nome={nome} categoria_id={categoria_id} preco={preco} descricao={descricao} qnt_disponivel={qnt_disponivel}/>&nbsp;
                <BtnVisualizar id={id} nome={nome} categoria_id={categoria_id} preco={preco} descricao={descricao} qnt_disponivel={qnt_disponivel} />&nbsp;
            </td>
        </tr>
    )
}

export default CardProdutoTable