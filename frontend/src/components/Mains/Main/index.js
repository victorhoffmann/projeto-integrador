import ShelfHeadsets from "../../Cards/CardHeadsets";
import ShelfMonitores from "../../Cards/CardMonitores";
import ShelfTeclados from "../../Cards/CardTeclados";
import ShelfMouses from "../../Cards/CardMouses";
import ShelfMousePads from "../../Cards/CardMousePads";
import "./style.css";

const Main = () => {
  return (
    <main className="mainHome">
      <div id="produtosLinks">
        <a href="#headsets">Headsets</a>
        <a href="#monitores">Monitores</a>
        <a href="#teclados">Teclados</a>
        <a href="#mouses">Mouses</a>
        <a href="#mousepads">MousePads</a>
      </div>
      <h2 className="titlePage">Headsets</h2>
      <div id="headsets" className="cardsHome">
        <ShelfHeadsets />
        <ShelfHeadsets />
        <ShelfHeadsets />
      </div>
      <a href="./headsets" className='linkSearchAll'><button type="button" className="btn btn-outline-success">
          Ver tudo&nbsp; 
          <i className="fa fa-search" aria-hidden="true"></i>
        </button></a>
      <h2 className="titlePage">Monitores</h2>
      <div id="monitores" className="cardsHome">
        <ShelfMonitores />
        <ShelfMonitores />
        <ShelfMonitores />
      </div>
      <a href="./monitores" className='linkSearchAll'><button type="button" className="btn btn-outline-success">
          Ver tudo&nbsp; 
          <i className="fa fa-search" aria-hidden="true"></i>
        </button></a>
      <h2 className="titlePage">Teclados</h2>
      <div id="teclados" className="cardsHome">
        <ShelfTeclados />
        <ShelfTeclados />
        <ShelfTeclados />
      </div>
      <a href="./teclados" className='linkSearchAll'><button type="button" className="btn btn-outline-success">
          Ver tudo&nbsp; 
          <i className="fa fa-search" aria-hidden="true"></i>
        </button></a>
      <h2 className="titlePage">Mouses</h2>
      <div id="mouses" className="cardsHome">
        <ShelfMouses />
        <ShelfMouses />
        <ShelfMouses />
      </div>
      <a href="./mouses" className='linkSearchAll'><button type="button" className="btn btn-outline-success">
          Ver tudo&nbsp; 
          <i className="fa fa-search" aria-hidden="true"></i>
        </button></a>
      <h2 className="titlePage">MousePads </h2>
      <div id="mousepads" className="cardsHome">
        <ShelfMousePads />
        <ShelfMousePads />
        <ShelfMousePads />
      </div>
      <a href="./mousepads" className='linkSearchAll'><button type="button" className="btn btn-outline-success">
          Ver tudo&nbsp; 
          <i className="fa fa-search" aria-hidden="true"></i>
        </button></a>
    </main>
  );
};

export default Main;
