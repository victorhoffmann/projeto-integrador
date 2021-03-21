import CardTodosProdutos from "../CardTodosProdutos";
import "./style.css";

const ShelfTodosProdutos = () => {
  return (
    <section className="shelf">
      <h1 className="shelf__title">Todos os produtos!</h1>
      <CardTodosProdutos />
      <CardTodosProdutos />
      <CardTodosProdutos />
      <CardTodosProdutos />
      <CardTodosProdutos />
    </section>
  );
};

export default ShelfTodosProdutos;
