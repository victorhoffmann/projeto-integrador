import React, {useEffect, useState } from 'react'
import axios from 'axios'
import CategoriaProduto from '../../Categoria_ID/index'
import RenderFotos from '../../Categoria_ID/RenderFotos'

const ShelfHeadsets = () => {

  const [dataProdutos, setDataProdutos] = useState({
    produtos: []});

  useEffect(() => {

    const getDataProdutos = async () => {
      try {
        const response = await axios.get('/produtos/categorias/3');
          setDataProdutos(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    getDataProdutos();
  }, []);

    return (
      <>
          {dataProdutos.produtos.slice(0,3).map((produto, index) => (
              <article className="card">
                  <h3 className="card__title">{produto.nome}</h3>
                  <img className="card__img" src={RenderFotos(produto.categoria_id)} alt={CategoriaProduto(produto.categoria_id)} />
                  <span className="card__price">R${produto.preco}</span>
                  <button type="button" className="card__button btn btn-outline-success">
                      Adicionar ao carrinho{" "}
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </button>
              </article>
          ))}
      </>
  )
};

export default ShelfHeadsets;
