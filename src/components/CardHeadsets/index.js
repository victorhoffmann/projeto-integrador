import Headset1 from "../../assets/headset1.jpg";
import Headset2 from "../../assets/headset2.jpg";
import Headset3 from "../../assets/headset3.jpg";
import "./style.css";

const CardHeadsets = (props) => {
  const { title, description, price } = props;
  return (
    <>
      <article className="card">
        <h3 className="card__title">{title}</h3>
        <img className="card__img" src={Headset1} alt="Produto 1" />
        <span className="card__price">{price}</span>
        <p className="card__description">{description}</p>
        <button type="button" className="card__button btn btn-outline-success">
          Adicionar ao carrinho{" "}
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </button>
      </article>
      <article className="card">
        <h3 className="card__title">{title}</h3>
        <img className="card__img" src={Headset2} alt="Produto 2" />
        <span className="card__price">{price}</span>
        <p className="card__description">{description}</p>
        <button type="button" className="card__button btn btn-outline-success">
          Adicionar ao carrinho{" "}
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </button>
      </article>
      <article className="card">
        <h3 className="card__title">{title}</h3>
        <img className="card__img" src={Headset3} alt="Produto 3" />
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

export default CardHeadsets;
