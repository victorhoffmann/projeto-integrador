import BtnAdd from '../Btns/BtnAdd'
import CardProdutoTable from '../../components/Cards/CardProdutoTable'
import { content } from '../../Helpers/TodosProdutosTable'
import './style.css'

const RenderPosts = () => {
  const { posts } = content
  return posts.map((post, index) => 
      <CardProdutoTable {...post} key={index}/>
    )
}

const TabelaProdutos = () => {
    return (
        <div className="painelProdutos">
            <div className="pesquisaProdutos">
                <input class="form-control" type="text" placeholder="Procure o produto" readonly />
                <BtnAdd />
            </div>
            <div className="tabelaItens">
                <table id="t01">
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Ações</th>
                    </tr>
                    <RenderPosts/>
                </table>
            </div>
        </div>
    )
}
export default TabelaProdutos