import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RenderProdutos from '../../components/RenderProdutos';

const TodosProdutos = () => {
  const [dataProdutos, setDataProdutos] = useState({
    produtos: []});

  useEffect(() => {

    const getDataProdutos = async () => {
      try {
        const response = await axios.get('/produtos/categorias/');
          setDataProdutos(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    getDataProdutos();
  }, []);

  return (
    <>
      <h1 className="shelf__title">Nossos produtos</h1>
      <section className="shelf">
        <RenderProdutos produtos={dataProdutos.produtos}/>
      </section>
    </>
  );
};

export default TodosProdutos;