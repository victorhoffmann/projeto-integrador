import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MainProduto from "../../components/Mains/MainProduto"
import { useParams } from 'react-router-dom'

const Produto = () => {
  const { id } = useParams()
  const [dataProduto, setDataProduto] = useState({
    produto: []});
  
  useEffect(() => {
    const getDataProduto = async () => {
      try {
        const response = await axios.get(`/produtos/${id}`);
          setDataProduto(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    getDataProduto();
  }, []);

  return(
    <MainProduto produto={dataProduto.produto}/>
  )
}
      
export default Produto;