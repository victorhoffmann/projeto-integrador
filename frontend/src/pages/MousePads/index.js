import ShelfMousePads from "../../components/Shelfs/ShelfMousePads";
import { content } from "../../Helpers/MousePads";

const MousePads = () => {
  const { categories, posts } = content;
  const renderCategories = () => {
    return categories.map((category) => {
      const { id, title } = category;
      const catPosts = posts.filter((post) => post.cat_id === id);
      return <ShelfMousePads title={title} key={id} posts={catPosts} />;
    });
  };
  return (
    <>
      <h1 className="shelf__title">Mouse Pads</h1>
      {renderCategories()}
    </>
  );
};
export default MousePads;
