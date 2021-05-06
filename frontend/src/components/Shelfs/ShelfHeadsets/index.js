import CardHeadsets from "../../Cards/CardHeadsets";

const ShelfHeadsets = ({ ...props }) => {
  const { posts } = props;
  const renderPosts = () => {
    return posts.map((post, index) => {
      const { title, description, price } = post;
      return (
        <CardHeadsets
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

export default ShelfHeadsets;
