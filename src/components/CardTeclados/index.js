import Teclado1 from "../../assets/teclado1.jfif";
import Teclado2 from "../../assets/teclado2.jfif";
import Teclado3 from "../../assets/teclado3.jfif";
import "./style.css";

const CardTeclados = (props) => {
  const { title, description, price } = props;
  return (
    <>
      <article className="card">
        <h3 className="card__title">{title}</h3>
        <img className="card__img" src={Teclado1} alt="Produto 1" />
        <span className="card__price">{price}</span>
        <p className="card__description">{description}</p>
        <button type="button" className="card__button btn btn-outline-success">
          Adicionar ao carrinho{" "}
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </button>
      </article>
      <article className="card">
        <h3 className="card__title">{title}</h3>
        <img className="card__img" src={Teclado2} alt="Produto 2" />
        <span className="card__price">{price}</span>
        <p className="card__description">{description}</p>
        <button type="button" className="card__button btn btn-outline-success">
          Adicionar ao carrinho{" "}
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </button>
      </article>
      <article className="card">
        <h3 className="card__title">{title}</h3>
        <img className="card__img" src={Teclado3} alt="Produto 3" />
        <span className="card__price">{price}</span>
        <p className="card__description">{description}</p>
        <button type="button" className="card__button btn btn-outline-success">
          Adicionar ao carrinho{" "}
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </button>
      </article>
    </>
  );
};

export default CardTeclados;
