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
                <BtnExcluir />&nbsp;
                <BtnModificar title={title} description={description} price={price}/>&nbsp;
                <BtnVisualizar title={title} description={description} price={price} />&nbsp;
            </td>
        </tr>
    )
}

export default CardProdutoTable