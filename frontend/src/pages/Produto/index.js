import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MainProduto from "../../components/Mains/MainProduto"

const Produto = ({ produto }) => {

   const [dataProduto, setDataProduto] = useState({
      produto: []});
  
    useEffect(() => {
  
      const getDataProduto = async () => {
        try {
          const response = await axios.get(`/produtos/${produto}`);
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