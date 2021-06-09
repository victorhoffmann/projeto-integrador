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
          const response = await axios.post('/produtos', {
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
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalAdd" data-whatever="@getbootstrap">
                Adicionar
            </button>

            <div className="modal fade" id="modalAdd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Adicione um produto</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label for="recipient-name" className="col-form-label">Nome:</label>
                                    <input type="text" className="form-control" id="recipient-name" required value={nome} onChange={(e) => setNome(e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label for="recipient-categoria" className="col-form-label">Categoria:</label>
                                    <input type="text" className="form-control" id="recipient-categoria" required value={categoria_id} onChange={(e) => setCategoria_ID(e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label for="recipient-preco" className="col-form-label">Preço:</label>
                                    <input type="number" step='any' className="form-control" id="recipient-preco" required value={preco} onChange={(e) => setPreco(e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label for="message-text" className="col-form-label">Descrição:</label>
                                    <textarea className="form-control" id="message-text" required value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                                </div>
                                <div className="form-group">
                                    <label for="recipient-qnt" className="col-form-label">Quantidade disponivel:</label>
                                    <input type="number" step='any' className="form-control" id="recipient-qnt" required value={qnt_disponivel} onChange={(e) => setQnt(e.target.value)}></input>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <form onSubmit={handleAdd}>
                                <button type="submit" className="btn btn-primary">Adicionar produto</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BtnAdd