import React, { useState, useEffect } from 'react'
import CategoriaProduto from '../../Categoria_ID'
import axios from 'axios'
import './style.css'
import { useHistory } from 'react-router-dom'


const BtnModificar = ({ produto }) => {
    const [nome_input, setNome] = useState('');
    const [categoria_id_input, setCategoria_ID] = useState('');
    const [preco_input, setPreco] = useState('');
    const [descricao_input, setDescricao] = useState('');
    const [qnt_input, setQnt] = useState('');
    const history = useHistory();

    const handleModify = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`/admin/${produto}`, {
                nome: nome_input,
                categoria_id: categoria_id_input,
                preco: preco_input,
                descricao: descricao_input,
                qnt_disponivel: qnt_input
            });
            history.go(0);
            } catch (error) {
              console.log(error);
            }
    }

    useEffect(() => {
        const getDataModificar = async () => {
          try {
            let response = await axios.get(`/admin/${produto}`);
                response= response.data.produto
                setNome(response.nome)
                setCategoria_ID(response.categoria_id)
                setPreco(response.preco)
                setDescricao(response.descricao)
                setQnt(response.qnt_disponivel)
              
            } catch (error) {
              console.log(error);
            }
          };
          getDataModificar();
        }, []);


    return (
        <>
            <button id='btnModificarText' type="button" class="btn btn-success" data-toggle="modal" data-target={`#modalModificar${produto}`} data-whatever="@getbootstrap">
                Modificar
            </button>
            <button id='btnModificarIcon' type="button" class="btn btn-success" data-toggle="modal" data-target={`#modalModificar${produto}`} data-whatever="@getbootstrap">
                <i class="fa fa-retweet"></i>
            </button>

            <div class="modal fade" id={`modalModificar${produto}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edite o produto</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for={`recipient-name-${produto}`} class="col-form-label">Nome:</label>
                                    <input type="text" class="form-control" id={`recipient-name-${produto}`} value={nome_input} onChange={(e) => setNome(e.target.value)}></input>
                                </div>
                                <div class="form-group">
                                    <label for={`recipient-categoria_id-${produto}`} class="col-form-label">Categoria:</label>
                                    <input type="text" class="form-control" id={`recipient-categoria_id-${produto}`} value={CategoriaProduto(categoria_id_input)} onChange={(e) => setCategoria_ID(e.target.value)}></input>
                                </div>
                                <div class="form-group">
                                    <label for={`recipient-price-${produto}`} class="col-form-label">Preço:</label>
                                    <input type="number" step='any' class="form-control" id={`recipient-price-${produto}`} value={preco_input} onChange={(e) => setPreco(e.target.value)}></input>
                                </div>
                                <div class="form-group">
                                    <label for={`message-text-${produto}`} class="col-form-label">Descrição:</label>
                                    <textarea class="form-control" id={`message-text-${produto}`} value={descricao_input} onChange={(e) => setDescricao(e.target.value)}></textarea>
                                </div>
                                <div class="form-group">
                                    <label for={`recipient-qnt_disponivel-${produto}`} class="col-form-label">Quantidade disponivel:</label>
                                    <input type="number" class="form-control" id={`recipient-qnt_disponivel-${produto}`} value={qnt_input} onChange={(e) => setQnt(e.target.value)}></input>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <form onSubmit={handleModify}>
                                <button type="submit" class="btn btn-primary">Aplicar alterações</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BtnModificar