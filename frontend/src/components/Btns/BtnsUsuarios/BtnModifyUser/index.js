import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const BtnModifyUser = ({ usuario }) => {
    const [nome_input, setNome] = useState('');
    const [email_input, setEmail] = useState('');
    const [cpf_cnpj_input, setCpf_Cnpj] = useState('');
    const [id_funcao_input, setFuncao] = useState('');
    const history = useHistory();

    const handleModify = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`/usuarios/${usuario}`, {
            nome: nome_input,
            email: email_input,
            cpf_cnpj: cpf_cnpj_input,
            id_funcao: id_funcao_input
          });
          history.go(0);
        } catch (error) {
            if (error.response.data) alert(error.response.data.message);
          else alert("Ops, deu ruim");
        }
      };
    
    useEffect(() => {
    const getDataModificarUser = async () => {
        try {
        let response = await axios.get(`/usuarios/${usuario}`);
            response= response.data.usuario
            setNome(response.nome)
            setEmail(response.email)
            setCpf_Cnpj(response.cpf_cnpj)
            setFuncao(response.id_funcao)
        } catch (error) {
            console.log(error);
        }};
        getDataModificarUser();
    }, []);


    return (
        <>
            <button id='btnModificarText' type="button" className="btn btn-success" data-toggle="modal" data-target={`#modalModificar-${usuario}`} data-whatever="@getbootstrap">
                Modificar
            </button>
            <button id='btnModificarIcon' type="button" className="btn btn-success" data-toggle="modal" data-target={`#modalModificar-${usuario}`} data-whatever="@getbootstrap">
                <i className="fa fa-retweet"></i>
            </button>

            <div className="modal fade" id={`modalModificar-${usuario}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edite o usuario</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form>
                                <div className="form-group">
                                    <label for={`recipient-nome-user-${usuario}`} className="col-form-label">Nome:</label>
                                    <input type="text" className="form-control" id={`recipient-nome-user-${usuario}`} required value={nome_input} onChange={(e) => setNome(e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label for={`recipient-email-user-${usuario}`} className="col-form-label">Email:</label>
                                    <input type="text" className="form-control" id={`recipient-email-user-${usuario}`} required value={email_input} onChange={(e) => setEmail(e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label for={`recipient-cpf-user-${usuario}`} className="col-form-label">CPF/CNPJ:</label>
                                    <input type='text' className="form-control" id={`recipient-cpf-user-${usuario}`} required value={cpf_cnpj_input} onChange={(e) => setCpf_Cnpj(e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label for={`recipient-funcao-user-${usuario}`} className="col-form-label">Função:</label>
                                    <input type="text" step='any' className="form-control" id={`recipient-funcao-user-${usuario}`} required value={id_funcao_input} onChange={(e) => setFuncao(e.target.value)}></input>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <form onSubmit={handleModify}>
                                <button type="submit" className="btn btn-primary">Aplicar alterações</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BtnModifyUser