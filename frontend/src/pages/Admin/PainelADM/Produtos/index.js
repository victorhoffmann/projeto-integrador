import React, { useState, useEffect } from 'react'
import MenuAdm from '../../../../components/MenuAdm'
import MainAdmProdutos from '../../../../components/Mains/MainAdm/MainAdmProdutos'
import api from '../../../../services/api'


const ProdutosADM = () => {
    const [dataProdutos, setDataProdutos] = useState({
        produtos: []});

    useEffect(() => {
      const getDataProdutos = async () => {
        try {
          const response = await api.get('/produtos');
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