import ShelfMouses from "../../components/ShelfMouses";
import { content } from "../../helpers/Mouses";

const Mouses = () => {
  const { categories, posts } = content;
  const renderCategories = () => {
    return categories.map((category) => {
      const { id, title } = category;
      const catPosts = posts.filter((post) => post.cat_id === id);
      return <ShelfMouses title={title} key={id} posts={catPosts} />;
    });
  };
  return (
    <>
      <h1 className="shelf__title">Mouses</h1>
      {renderCategories()}
    </>
  );
};
export default Mouses;
