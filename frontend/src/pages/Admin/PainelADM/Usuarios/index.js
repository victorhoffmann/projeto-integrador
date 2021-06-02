import React, { useState, useEffect } from 'react'
import MenuAdm from '../../../../components/MenuAdm'
import MainAdmUsuarios from '../../../../components/Mains/MainAdm/MainAdmUsuarios'
import api from '../../../../services/api'


const UsuariosADM = () => {
    const [dataUsuarios, setDataUsuarios] = useState({
        usuarios: []});
    
    useEffect(() => {
      const getDataUsuarios = async () => {
        try {
          const responseUsers = await api.get('/usuarios');
            setDataUsuarios(responseUsers.data);
        } catch (error) {
            console.log(error);
          }
        };
        getDataUsuarios();
      }, []);
    return (
        <>
            <div className="pageAdm">
                <MenuAdm />
                <MainAdmUsuarios usuarios={dataUsuarios.usuarios}/>
            </div>
        </>
    )
}

export default UsuariosADM