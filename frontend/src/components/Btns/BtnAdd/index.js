import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const BtnAdd = () => {
    const [nome, setNome] = useState('');
    const [categoria_id, setCategoria_ID] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [qnt_disponivel, setQnt] = useState('');
    const history = useHistory();

    const handleAdd = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('/admin', {
            nome,
            categoria_id,
            preco,
            descricao,
            qnt_disponivel
          });
          history.go(0);
        } catch (error) {
            if (error.response.data) alert(error.response.data.message);
          else alert("Ops, deu ruim");
        }
      };


    return (
        <>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalAdd" data-whatever="@getbootstrap">
                Adicionar
            </button>

            <div class="modal fade" id="modalAdd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Adicione um produto</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Nome:</label>
                                    <input type="text" class="form-control" id="recipient-name" required value={nome} onChange={(e) => setNome(e.target.value)}></input>
                                </div>
                                <div class="form-group">
                                    <label for="recipient-categoria" class="col-form-label">Categoria:</label>
                                    <input type="text" class="form-control" id="recipient-categoria" required value={categoria_id} onChange={(e) => setCategoria_ID(e.target.value)}></input>
                                </div>
                                <div class="form-group">
                                    <label for="recipient-preco" class="col-form-label">Preço:</label>
                                    <input type="number" step='any' class="form-control" id="recipient-preco" required value={preco} onChange={(e) => setPreco(e.target.value)}></input>
                                </div>
                                <div class="form-group">
                                    <label for="message-text" class="col-form-label">Descrição:</label>
                                    <textarea class="form-control" id="message-text" required value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="recipient-qnt" class="col-form-label">Quantidade disponivel:</label>
                                    <input type="number" step='any' class="form-control" id="recipient-qnt" required value={qnt_disponivel} onChange={(e) => setQnt(e.target.value)}></input>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <form onSubmit={handleAdd}>
                                <button type="submit" class="btn btn-primary">Adicionar produto</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BtnAdd