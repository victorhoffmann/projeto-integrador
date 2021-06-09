import ShelfHeadsets from "../../Shelfs/ShelfHeadsets";
import ShelfMonitores from "../../Shelfs/ShelfMonitores";
import ShelfTeclados from "../../Shelfs/ShelfTeclados";
import ShelfMouses from "../../Shelfs/ShelfMouses";
import ShelfMousePads from "../../Shelfs/ShelfMousePads";
import BtnBackToTop from "../../Btns/BtnBackToTop";
import "./style.css";

const Main = () => {
  return (
    <main className="mainHome">
      <div id="produtosLinks">
        <a href="#titleHeadsets">Headsets</a>
        <a href="#titleMonitores">Monitores</a>
        <a href="#titleTeclados">Teclados</a>
        <a href="#titleMouses">Mouses</a>
        <a href="#titleMousePads">MousePads</a>
      </div>
      <BtnBackToTop />
      <h2 className="titlePage" id="titleHeadsets">
        Headsets
      </h2>
      <div id="headsets" className="cardsHome">
        <ShelfHeadsets />
      </div>
      <a href="./headsets" className="linkSearchAll">
        <button type="button" className="btn btn-outline-success">
          Ver tudo&nbsp;
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </a>
      <h2 className="titlePage" id="titleMonitores">
        Monitores
      </h2>
      <div id="monitores" className="cardsHome">
        <ShelfMonitores />
      </div>
      <a href="./monitores" className="linkSearchAll">
        <button type="button" className="btn btn-outline-success">
          Ver tudo&nbsp;
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </a>
      <h2 className="titlePage" id="titleTeclados">
        Teclados
      </h2>
      <div id="teclados" className="cardsHome">
        <ShelfTeclados />
      </div>
      <a href="./teclados" className="linkSearchAll">
        <button type="button" className="btn btn-outline-success">
          Ver tudo&nbsp;
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </a>
      <h2 className="titlePage" id="titleMouses">
        Mouses
      </h2>
      <div id="mouses" className="cardsHome">
        <ShelfMouses />
      </div>
      <a href="./mouses" className="linkSearchAll">
        <button type="button" className="btn btn-outline-success">
          Ver tudo&nbsp;
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </a>
      <h2 className="titlePage" id="titleMousePads">
        MousePads{" "}
      </h2>
      <div id="mousepads" className="cardsHome">
        <ShelfMousePads />
      </div>
      <a href="./mousepads" className="linkSearchAll">
        <button type="button" className="btn btn-outline-success">
          Ver tudo&nbsp;
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </a>
    </main>
  );
};

export default Main;
