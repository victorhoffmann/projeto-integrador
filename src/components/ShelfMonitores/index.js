import CardMonitores from "../CardMonitores";
import "./style.css";

const ShelfMonitores = ({ ...props }) => {
  const { posts } = props;
  const renderPosts = () => {
    return posts.map((post, index) => {
      const { title, description, price } = post;
      return (
        <CardMonitores
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

export default ShelfMonitores;