import CardMonitores from "../CardMonitores";

const ShelfMonitores = ({ ...props }) => {
  const { posts } = props;
  const renderPosts = () => {
    return posts.map((post, index) => {
      const { title, description, price, img } = post;
      return (
        <CardMonitores
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

export default ShelfMonitores;
