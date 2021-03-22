import ShelfTeclados from "../../components/ShelfTeclados";
import { content } from "../../helpers/Teclados";

const Teclados = () => {
  const { categories, posts } = content;
  const renderCategories = () => {
    return categories.map((category) => {
      const { id, title } = category;
      const catPosts = posts.filter((post) => post.cat_id === id);
      return <ShelfTeclados title={title} key={id} posts={catPosts} />;
    });
  };
  return (
    <>
      <h1 className="shelf__title">Teclados</h1>
      {renderCategories()}
    </>
  );
};
export default Teclados;
