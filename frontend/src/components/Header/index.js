import { getUser, removeUser, removeToken } from "../../Helpers/session";
import SearchHome from '../SearchHome'
import "./style.css";

const Header = () => {
  const userNome = getUser

  const handleLogout = () => {
    removeToken()
    removeUser()
  }

  return (
    <header>
      <nav className="navbar  navbar-expand-lg ">
        <div id="logo">
          <a className="navbar-brand text-success logoname" href="/">
            Periféricos.Net
          </a>
        </div>

        <SearchHome />

        <button
          className="navbar-dark navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div id="links" className="navbar-nav">
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Produtos
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMendivink"
              >
                <a className="dropdown-item" href="/headsets">
                  Headsets
                </a>
                <a className="dropdown-item" href="/monitores">
                  Monitores
                </a>
                <a className="dropdown-item" href="/mouses">
                  Mouses
                </a>
                <a className="dropdown-item" href="/mousepads">
                  Mouse Pads
                </a>
                <a className="dropdown-item" href="/teclados">
                  Teclados
                </a>

                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/todosprodutos">
                  Todos os produtos
                </a>
              </div>
            </div>

            {userNome ? <a id='userNameHeader'> {userNome}  &nbsp;  </a>
            : 
            <a className="nav-links nav-item" href="/login">
              <i className="fa fa-user" aria-hidden="true"></i>
            </a>
            }
            
            <a className="nav-links nav-item" href="/carrinho">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </a>
            
            {userNome ? <button id='userLogout' onClick={handleLogout}>Sair</button> : null}
          </div>
        </div>
      </nav>

    </header>
  );
};

export default Header;
