import "./style.css";

const Header = () => {
  return (
    <header>
      
      <nav class="navbar  navbar-expand-lg ">

  <div id="logo">
          <a className="navbar-brand text-success logoname" href="./">
            Periféricos.Net
          </a>
        </div>

  <button class=" navbar-dark navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon "></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div id="links"  class="navbar-nav">
    <a className="nav-links nav-item" href="./login">
            <i className="fa fa-user" aria-hidden="true"></i>
          </a>

      <a className="nav-links nav-item" href="#">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </a>
      
      <div  class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Produtos
        </a>
        <div className="dropdown-menu" aria-labelledby="dropdownMendivink">
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
        
      
    </div>
    
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
