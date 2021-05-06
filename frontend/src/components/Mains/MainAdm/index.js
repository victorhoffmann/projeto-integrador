import TabelaProdutos from '../../TabelaProdutos'
import './style.css'

const MainAdm = () => {
    return (
        <div className="mainAdm">
            <div className="headerAdm">
                <h4>Produtos</h4>
                <a href="./admin" ><button type="button" className="btn btn-outline-danger">Sair <i class="fas fa-sign-out-alt" aria-hidden="true"></i></button></a>
            </div>
            <TabelaProdutos />
        </div>
    )
}

export default MainAdm