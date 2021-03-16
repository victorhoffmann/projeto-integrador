import "./style.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div id="logo">
          <a className="navbar-brand text-success logoname" href="/index.html">
            Periféricos.Net
          </a>
        </div>

        <div id="links">
          <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Produtos
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">
                Headsets
              </a>
              <a className="dropdown-item" href="#">
                Monitores
              </a>
              <a className="dropdown-item" href="#">
                Mouses
              </a>
              <a className="dropdown-item" href="#">
                Teclados
              </a>
              <a className="dropdown-item" href="#">
                Mouse Pads
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Todos os produtos
              </a>
            </div>
          </div>
          <a className="nav-link" href="./minhaConta">
            <i className="fa fa-user" aria-hidden="true"></i>
          </a>
          <a className="nav-link" href="#">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </a>
        </div>
      </nav>
      <form className="d-flex">
        <input
          className="form-control mr-2"
          type="search"
          placeholder="Produtos"
          aria-label="Produtos"
        />
        <button className="btn btn-outline-success" type="submit">
          Pesquisar
        </button>
      </form>
    </header>
  );
};

export default Header;
