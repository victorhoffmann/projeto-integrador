import ShelfHeadsets from "../../components/ShelfHeadsets";
import { content } from "../../Helpers/Headsets";
import "./style.css";

const Headsets = () => {
  const { categories, posts } = content;
  const renderCategories = () => {
    return categories.map((category) => {
      const { id, title } = category;
      const catPosts = posts.filter((post) => post.cat_id === id);
      return <ShelfHeadsets title={title} key={id} posts={catPosts} />;
    });
  };
  return (
    <>
      <h1 className="shelf__title">Headsets</h1>
      {renderCategories()}
    </>
  );
};
export default Headsets;
