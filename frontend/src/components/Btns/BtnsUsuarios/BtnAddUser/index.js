import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const BtnAddUser = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf_cnpj, setCpf_Cnpj] = useState('');
    const [id_funcao, setFuncao] = useState('');
    const history = useHistory();

    const handleAdd = async (e) => {
        e.preventDefault();
    
        try {
          await axios.post('/usuarios', {
            nome,
            email,
            senha,
            cpf_cnpj,
            id_funcao
          });
          history.go(0);
        } catch (error) {
            if (error.response.data) alert(error.response.data.message);
          else alert("Ops, deu ruim");
        }
      };


    return (
        <>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalAddUser" data-whatever="@getbootstrap">
                Adicionar
            </button>

            <div className="modal fade" id="modalAddUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Adicione um usuario</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label for="recipient-name-user" className="col-form-label">Nome:</label>
                                    <input type="text" className="form-control" id="recipient-name-user" required value={nome} onChange={(e) => setNome(e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label for="recipient-email" className="col-form-label">Email:</label>
                                    <input type="text" className="form-control" id="recipient-email" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label for="recipient-senha" className="col-form-label">Senha:</label>
                                    <input type="text" step='any' className="form-control" id="recipient-senha" required value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label for="message-text-cpf" className="col-form-label">CPF/CNPJ:</label>
                                    <input type='text' className="form-control" id="message-text-cpf" required value={cpf_cnpj} onChange={(e) => setCpf_Cnpj(e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label for="recipient-funcao" className="col-form-label">Função:</label>
                                    <input type="text" step='any' className="form-control" id="recipient-funcao" required value={id_funcao} onChange={(e) => setFuncao(e.target.value)}></input>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <form onSubmit={handleAdd}>
                                <button type="submit" className="btn btn-primary">Adicionar usuario</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BtnAddUser