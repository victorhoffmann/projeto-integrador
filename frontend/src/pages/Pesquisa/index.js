import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RenderProdutos from '../../components/RenderProdutos';
import { useParams } from 'react-router-dom'

const Pesquisa = () => {
  const { searchValue } = useParams()
  const [dataPesquisa, setDataPesquisa] = useState({
    produtos: []});
  
  useEffect(() => {
    const getDataPesquisa = async () => {
      try {
        const response = await axios.get(`/produtos/searchHome/${searchValue}`);
          setDataPesquisa(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    getDataPesquisa();
  }, []);

  return (
    <>
      <h1 className="shelf__title">
      {dataPesquisa.produtos.length === 0
      ? `Não encontramos nenhum produto com esse nome "${searchValue}" então aproveite para conhecer nossos produtos!` 
      : `Filtrando por "${searchValue}` }
      </h1>
      <section className="shelf">
        {dataPesquisa.produtos.length === 0
        ? <a className='linkCarousel' href='/todosprodutos'><button className='btn btn-success'>Conhecer</button></a>
        : <RenderProdutos produtos={dataPesquisa.produtos}/> 
        }
        
      </section>
    </>
  );
};

export default Pesquisa;