import BtnExcluir from '../../components/BtnExcluir'
import BtnModificar from '../../components/BtnModificar'
import BtnVisualizar from '../../components/BtnVisualizar'

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