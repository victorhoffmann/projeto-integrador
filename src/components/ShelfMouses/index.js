import CardMouses from "../CardMouses";
import "./style.css";

const ShelfMouses = ({ ...props }) => {
  const { posts } = props;
  const renderPosts = () => {
    return posts.map((post, index) => {
      const { title, description, price } = post;
      return (
        <CardMouses
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

export default ShelfMouses;