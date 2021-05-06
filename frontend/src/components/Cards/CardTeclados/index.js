import teclado1 from '../../../assets/teclado1.jpg'
const CardTeclados = (props) => {
  const { title, description, price} = props;
  return (
    <>
      <article className="card">
        <h3 className="card__title">{title}</h3>
        <img className="card__img" src={teclado1} alt="Teclado" />
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
