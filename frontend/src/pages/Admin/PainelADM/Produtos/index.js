import React, { useState, useEffect } from 'react'
import MenuAdm from '../../../../components/MenuAdm'
import MainAdmProdutos from '../../../../components/Mains/MainAdm/MainAdmProdutos'
import axios from 'axios'

const ProdutosADM = () => {
    const [dataProdutos, setDataProdutos] = useState({
        produtos: []});

    useEffect(() => {
      const getDataProdutos = async () => {
        try {
          const response = await axios.get('/admin');
            setDataProdutos(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        getDataProdutos();
      }, []);
    return (
        <>
            <div className="pageAdm">
                <MenuAdm />
                <MainAdmProdutos produtos={dataProdutos.produtos}/>
            </div>
        </>
    )
}

export default ProdutosADM