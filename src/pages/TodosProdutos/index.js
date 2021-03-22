import ShelfTodosProdutos from "../../components/ShelfTodosProdutos";
import { content } from "../../helpers/TodosProdutos";

const TodosProdutos = () => {
  const { categories, posts } = content;
  const renderCategories = () => {
    return categories.map((category) => {
      const { id, title } = category;
      const catPosts = posts.filter((post) => post.cat_id === id);
      return <ShelfTodosProdutos title={title} key={id} posts={catPosts} />;
    });
  };
  return (
    <>
      <h1 className="shelf__title">Todos os produtos</h1>
      {renderCategories()}
    </>
  );
};
export default TodosProdutos;
