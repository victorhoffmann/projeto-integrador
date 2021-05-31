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
          const response = await axios.post('/usuarios', {
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
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalAddUser" data-whatever="@getbootstrap">
                Adicionar
            </button>

            <div class="modal fade" id="modalAddUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Adicione um usuario</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="recipient-name-user" class="col-form-label">Nome:</label>
                                    <input type="text" class="form-control" id="recipient-name-user" required value={nome} onChange={(e) => setNome(e.target.value)}></input>
                                </div>
                                <div class="form-group">
                                    <label for="recipient-email" class="col-form-label">Email:</label>
                                    <input type="text" class="form-control" id="recipient-email" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                </div>
                                <div class="form-group">
                                    <label for="recipient-senha" class="col-form-label">Senha:</label>
                                    <input type="text" step='any' class="form-control" id="recipient-senha" required value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                                </div>
                                <div class="form-group">
                                    <label for="message-text-cpf" class="col-form-label">CPF/CNPJ:</label>
                                    <input type='text' class="form-control" id="message-text-cpf" required value={cpf_cnpj} onChange={(e) => setCpf_Cnpj(e.target.value)}></input>
                                </div>
                                <div class="form-group">
                                    <label for="recipient-funcao" class="col-form-label">Função:</label>
                                    <input type="text" step='any' class="form-control" id="recipient-funcao" required value={id_funcao} onChange={(e) => setFuncao(e.target.value)}></input>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <form onSubmit={handleAdd}>
                                <button type="submit" class="btn btn-primary">Adicionar usuario</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BtnAddUser