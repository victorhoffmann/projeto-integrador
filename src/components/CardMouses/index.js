import Mouse1 from "../../assets/mouse1.jfif";
import Mouse2 from "../../assets/mouse2.jfif";
import Mouse3 from "../../assets/mouse3.jfif";
import "./style.css";

const CardMouses = (props) => {
  const { title, description, price } = props;
  return (
    <>
      <article className="card">
        <h3 className="card__title">{title}</h3>
        <img className="card__img" src={Mouse1} alt="Produto 1" />
        <span className="card__price">{price}</span>
        <p className="card__description">{description}</p>
        <button type="button" className="card__button btn btn-outline-success">
          Adicionar ao carrinho{" "}
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </button>
      </article>
      <article className="card">
        <h3 className="card__title">{title}</h3>
        <img className="card__img" src={Mouse2} alt="Produto 2" />
        <span className="card__price">{price}</span>
        <p className="card__description">{description}</p>
        <button type="button" className="card__button btn btn-outline-success">
          Adicionar ao carrinho{" "}
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </button>
      </article>
      <article className="card">
        <h3 className="card__title">{title}</h3>
        <img className="card__img" src={Mouse3} alt="Produto 3" />
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

export default CardMouses;
