import ShelfMonitores from "../../components/Shelfs/ShelfMonitores";
import { content } from "../../Helpers/Monitores";

const Monitores = () => {
  const { categories, posts } = content;
  const renderCategories = () => {
    return categories.map((category) => {
      const { id, title } = category;
      const catPosts = posts.filter((post) => post.cat_id === id);
      return <ShelfMonitores title={title} key={id} posts={catPosts} />;
    });
  };
  return (
    <>
      <h1 className="shelf__title">Monitores</h1>
      {renderCategories()}
    </>
  );
};
export default Monitores;
