import BtnExcluir from '../../Btns/BtnExcluir'
import BtnModificar from '../../Btns/BtnModificar'
import BtnVisualizar from '../../Btns/BtnVisualizar'

const CardProdutoTable = ({ ...props }) => {
    const { id, nome, descricao, preco } = props;
    return (
        <tr>
            <td>{id}</td>
            <td>{nome}</td>
            <td>
                <BtnExcluir id={id} nome={nome}/>&nbsp;
                <BtnModificar id={id} nome={nome} descricao={descricao} preco={preco}/>&nbsp;
                <BtnVisualizar id={id} nome={nome} descricao={descricao} preco={preco} />&nbsp;
            </td>
        </tr>
    )
}

export default CardProdutoTable