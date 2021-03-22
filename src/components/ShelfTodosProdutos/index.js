import CardTodosProdutos from "../CardTodosProdutos";

const ShelfTodosProdutos = ({ ...props }) => {
  const { posts } = props;
  const renderPosts = () => {
    return posts.map((post, index) => {
      const { title, description, price } = post;
      return (
        <CardTodosProdutos
          title={title}
          description={description}
          price={price}
          key={index}
        />
      );
    });
  };
  return <section className="shelf">{renderPosts()}</section>;
};

export default ShelfTodosProdutos;
