import BtnAdd from '../../components/BtnAdd'
import CardProdutoTable from '../../components/CardProdutoTable'
import { content } from '../../Helpers/TodosProdutosTable'
import './style.css'

const TabelaProdutos = () => {
    const { posts } = content

    const renderPosts = () => {
        return posts.map((post, index) => {
          const { id, title, price, description } = post
          return (
            <CardProdutoTable id={id} title={title} price={price} description={description} key={index}/>
          )
        })
      }

    return (
        <div className="painelProdutos">
            <div className="pesquisaProdutos">
                <input class="form-control" type="text" placeholder="Procure o produto" readonly></input>
                <BtnAdd />
            </div>
            <div className="tabelaItens">
                <table id="t01">
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Ações</th>
                    </tr>
                    {renderPosts()}
                </table>
            </div>
        </div>
    )
}

export default TabelaProdutos