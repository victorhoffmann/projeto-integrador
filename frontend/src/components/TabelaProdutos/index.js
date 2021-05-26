import React, { useEffect, useState} from 'react'
import BtnAdd from '../Btns/BtnAdd'
import CardProdutoTable from '../../components/Cards/CardProdutoTable'
import './style.css'
import axios from 'axios'

const RenderPosts = ({ produtos }) => {
        return produtos.map((post, index) => 
            <CardProdutoTable {...post} key={index}/>
            )       
}

const TabelaProdutos = () => {
    const [data, setData] = useState({
        produtos: []
      });
      useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(`/admin}`);
            setData(response.data);
          } catch (error) {
            console.log(error);
          }
          console.log(data.produtos)
        };
        getData();
      }, []);
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
                    <RenderPosts produtos={data.produtos}/>
                </table>
            </div>
        </div>
    )
}
export default TabelaProdutos