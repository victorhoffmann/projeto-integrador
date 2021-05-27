import React, { useState, useEffect } from 'react'
import MenuAdm from '../../../components/MenuAdm'
import MainAdm from '../../../components/Mains/MainAdm'
import axios from 'axios'

import './style.css'

const PainelADM = () => {
    const [data, setData] = useState({
        produtos: []});

    // useEffect( () => {
    //   fetch("/admin/")
    //     .then( (res) => res.json() )
    //     .then( (res) => setData(res));
    // }, []);
    
    useEffect(() => {
      const getData = async () => {
        try {
          const response = await axios.get('/admin');
            setData(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        getData();
      }, []);
    return (
        <>
            <div className="pageAdm">
                <MenuAdm />
                {window.location.pathname === "/painel-adm/produtos" ? <MainAdm produtos={data.produtos}/> : null}
            </div>
        </>
    )
}

export default PainelADM