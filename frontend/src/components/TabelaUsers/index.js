import BtnModifyUser from '../Btns/BtnsUsuarios/BtnModifyUser'
import BtnDeleteUser from '../Btns/BtnsUsuarios/BtnDeleteUser'

const TabelaUsers = ({usuarios}) => {
    return (
        <div className="tabelaItens">
            <table id="t01">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Usuario</th>
                        <th>Email</th>
                        <th>Função</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, index) => (
                        <tr className={`item-${usuario.id}`}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nome}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.id_funcao === 1 ? 'Admin' : "Usuario Final"}</td>
                            <td>
                                <BtnDeleteUser usuario={usuario} />&nbsp;
                                <BtnModifyUser usuario={usuario.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TabelaUsers