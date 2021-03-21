import CardTeclados from "../CardTeclados";
import "./style.css";

const ShelfTeclados = ({ ...props }) => {
  const { posts } = props;
  const renderPosts = () => {
    return posts.map((post, index) => {
      const { title, description, price } = post;
      return (
        <CardTeclados
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

export default ShelfTeclados;
