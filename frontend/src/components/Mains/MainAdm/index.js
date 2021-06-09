import { removeToken, removeUser} from '../../../Helpers/session'


const MainADM = () => {

    const handleLogout = () => {
        removeToken()
        removeUser()
    }

    return (
        <>
            <div className="mainAdm">
                <div className="headerAdm">
                    <h4>Inicio</h4>
                    <a href="/admin" ><button onClick={handleLogout} className="btn btn-outline-danger">Sair <i className="fas fa-sign-out-alt" aria-hidden="true"></i></button></a>
                </div>
            </div>
        </>
    )
}

export default MainADM