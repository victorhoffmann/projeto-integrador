import Monitor1 from "../../assets/monitor1.jpg";
import Monitor2 from "../../assets/monitor2.jfif";
import Monitor3 from "../../assets/monitor3.jfif";
import "./style.css";

const CardTodosProdutos = () => {
  return (
    <>
      <article className="card">
        <h3 className="card__title">Produto 1</h3>
        <img className="card__img" src={Monitor1} alt="Produto 1" />
        <span className="card__price">R$899,99</span>
        <p className="card__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit suscipit
          voluptatum harum illo, eaque, dolores aut ullam officia cum distinctio
          laborum magni atque tempore quae qui? Culpa odio perferendis natus!
        </p>
        <button type="button" className="card__button btn btn-outline-success">
          Adicionar ao carrinho{" "}
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </button>
      </article>
      <article className="card">
        <h3 className="card__title">Produto 2</h3>
        <img className="card__img" src={Monitor2} alt="Produto 2" />
        <span className="card__price">R$899,99</span>
        <p className="card__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit suscipit
          voluptatum harum illo, eaque, dolores aut ullam officia cum distinctio
          laborum magni atque tempore quae qui? Culpa odio perferendis natus!
        </p>
        <button type="button" className="card__button btn btn-outline-success">
          Adicionar ao carrinho{" "}
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </button>
      </article>
      <article className="card">
        <h3 className="card__title">Produto 3</h3>
        <img className="card__img" src={Monitor3} alt="Produto 3" />
        <span className="card__price">R$899,99</span>
        <p className="card__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit suscipit
          voluptatum harum illo, eaque, dolores aut ullam officia cum distinctio
          laborum magni atque tempore quae qui? Culpa odio perferendis natus!
        </p>
        <button type="button" className="card__button btn btn-outline-success">
          Adicionar ao carrinho{" "}
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </button>
      </article>
    </>
  );
};

export default CardTodosProdutos;
