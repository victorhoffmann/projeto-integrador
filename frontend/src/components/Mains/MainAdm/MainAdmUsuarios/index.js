import BtnAddUser from "../../../Btns/BtnsUsuarios/BtnAddUser"
import BtnDeleteUser from "../../../Btns/BtnsUsuarios/BtnDeleteUser"
import BtnModifyUser from '../../../Btns/BtnsUsuarios/BtnModifyUser'
import { removeToken} from '../../../../Helpers/session'


const MainAdmUsuarios = ( { usuarios }) => {
    const handleLogout = () => {
        removeToken()
      }

    return (
        <div className="mainAdm">
            <div className="headerAdm">
                <h4>Usuarios</h4>
                <a href="/admin" ><button onClick={handleLogout} className="btn btn-outline-danger">Sair <i class="fas fa-sign-out-alt" aria-hidden="true"></i></button></a>
            </div>
            <div className="painelProdutos">
            <div className="pesquisaProdutos">
                <input class="form-control" type="text" placeholder="Procure o usuario" readonly />
                <BtnAddUser />
            </div>
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
                    { usuarios.map((usuario, index) => (
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
        </div>
        </div>
    )
}

export default MainAdmUsuarios