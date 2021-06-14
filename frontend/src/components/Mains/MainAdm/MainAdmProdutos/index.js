import BtnAdd from '../../../Btns/BtnAdd'
import TabelaProdutos from '../../../TabelaProdutos'
import { removeToken, removeUser} from '../../../../Helpers/session'
import { useState } from 'react'

const MainAdmProdutos = ( { produtos }) => {

    const [valor, setValor] = useState("")
    const [searchColumns, setSeachColumns] = useState(["nome"]) 

    const handleLogout = () => {
        removeToken()
        removeUser()
    }

    function search(rows) {
        return rows.filter((row) =>
            searchColumns.some(
                (column) =>
                    row[column].toString().toLowerCase().indexOf(valor.toLowerCase()) > -1
            )
        );
    }

    const columns = produtos[0] && Object.keys(produtos[0])

    return (
        <div className="mainAdm">
            <div className="headerAdm">
                <h4>Produtos</h4>
                <a href="/" ><button onClick={handleLogout} className="btn btn-outline-danger">Sair <i className="fas fa-sign-out-alt" aria-hidden="true"></i></button></a>
            </div>
            <div className="painelProdutos">
                <div className="pesquisaProdutos">
                <input type="text" id='searchProdutos' placeholder='Pesquise pelo nome ou email' value={valor} onChange={(e) => setValor(e.target.value)} />
                    {columns &&
                        columns.map((column) => (
                            <label>
                                <input
                                    type='checkbox'
                                    checked={searchColumns.includes(column)}
                                    onChange={(e) => {
                                        const checked = searchColumns.includes(column);
                                        setSeachColumns((prev) =>
                                            checked
                                             ? prev.filter((sc) => sc !== column)
                                             : [...prev, column]
                                            );
                                    }}
                                    />
                                    {column}
                            </label>
                        ))}
                    <BtnAdd />
                </div>
                <TabelaProdutos produtos={search(produtos)} />
            </div>
        </div>
    )
}

export default MainAdmProdutos