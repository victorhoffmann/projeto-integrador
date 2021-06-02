import { removeToken} from '../../../Helpers/session'


const MainADM = () => {

    const handleLogout = () => {
        removeToken()
    }

    return (
        <>
            <div className="mainAdm">
                <div className="headerAdm">
                    <h4>Inicio</h4>
                    <a href="/admin" ><button onClick={handleLogout} className="btn btn-outline-danger">Sair <i class="fas fa-sign-out-alt" aria-hidden="true"></i></button></a>
                </div>
            </div>
        </>
    )
}

export default MainADM