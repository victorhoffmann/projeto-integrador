import CardMouses from "../CardMouses";

const ShelfMouses = ({ ...props }) => {
  const { posts } = props;
  const renderPosts = () => {
    return posts.map((post, index) => {
      const { title, description, price, img } = post;
      return (
        <CardMouses
          title={title}
          img={img}
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