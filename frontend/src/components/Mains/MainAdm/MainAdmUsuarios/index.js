import BtnAddUser from "../../../Btns/BtnsUsuarios/BtnAddUser"
import TabelaUsers from '../../../TabelaUsers'
import { removeToken, removeUser } from '../../../../Helpers/session'
import { useState } from "react"


const MainAdmUsuarios = ({ usuarios }) => {

    const [valor, setValor ] = useState('')

    const handleLogout = () => {
        removeToken()
        removeUser()
    }

    function search(rows) {
        return rows.filter(
            (row) =>
                row.nome.toLowerCase().indexOf(valor.toLowerCase()) > -1 ||
                row.email.toLowerCase().indexOf(valor.toLowerCase()) > -1
        );
    }

    return (
        <div className="mainAdm">
            <div className="headerAdm">
                <h4>Usuarios</h4>
                <a href="/" ><button onClick={handleLogout} className="btn btn-outline-danger">Sair <i className="fas fa-sign-out-alt" aria-hidden="true"></i></button></a>
            </div>
            <div className="painelProdutos">
                <div className="pesquisaProdutos">
                    <input type="text" id='searchUser' placeholder='Pesquise pelo nome ou email' value={valor} onChange={(e) => setValor(e.target.value)} />
                    <BtnAddUser />
                </div>
                    <TabelaUsers usuarios={search(usuarios)}/>
            </div>
        </div>
    )
}

export default MainAdmUsuarios