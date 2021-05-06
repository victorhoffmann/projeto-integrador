import BtnExcluir from '../../Btns/BtnExcluir'
import BtnModificar from '../../Btns/BtnModificar'
import BtnVisualizar from '../../Btns/BtnVisualizar'

const CardProdutoTable = ({ ...props }) => {
    const { id, title, description, price } = props;
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>
                <BtnExcluir id={id} title={title}/>&nbsp;
                <BtnModificar id={id} title={title} description={description} price={price}/>&nbsp;
                <BtnVisualizar id={id} title={title} description={description} price={price} />&nbsp;
            </td>
        </tr>
    )
}

export default CardProdutoTable