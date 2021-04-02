import BtnExcluir from '../../components/BtnExcluir'
import BtnModificar from '../../components/BtnModificar'
import BtnVisualizar from '../../components/BtnVisualizar'

const CardProdutoTable = ({ ...props }) => {
    const { title, description, price } = props;
    return (
        <tr>
            <td>x</td>
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