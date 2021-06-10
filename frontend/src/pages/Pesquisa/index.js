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
      <h1 className="shelf__title">Filtrando por "{searchValue}"</h1>
      <section className="shelf">
        <RenderProdutos produtos={dataPesquisa.produtos}/>
      </section>
    </>
  );
};

export default Pesquisa;