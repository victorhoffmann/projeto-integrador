import React, { useEffect, useState } from 'react'
import CategoriaProduto from '../../Categoria_ID'
import './style.css'
import axios from 'axios'

const BtnVisualizar = ({ produto }) => {
    const [dados, setDadosModificar] = useState({
        produto: []})

    useEffect(() => {
        const getDataModificar = async () => {
            try {
                const response = await axios.get(`/admin/${produto}`);
                setDadosModificar(response.data);
            } catch (error) {
                console.log(error);
            }
            };
            getDataModificar();
        }, []);

    return (
        <>
            <button id='btnVisualizarText' type="button" className="btn btn-primary" data-toggle="modal" data-target={`#modalVisualizar${produto}`} data-whatever="@getbootstrap">
                Visualizar
            </button>
            <button id='btnVisualizarIcon' type="button" className="btn btn-primary" data-toggle="modal" data-target={`#modalVisualizar${produto}`} data-whatever="@getbootstrap">
                <i className="fa fa-eye"></i>
            </button>

            <div className="modal fade" id={`modalVisualizar${produto}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edite o produto</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label for={`recipient-name2-${produto}`} className="col-form-label">Nome:</label>
                                    <input type="text" className="form-control" id={`recipient-name2-${produto}`} value={dados.produto.nome} disabled></input>
                                </div>
                                <div className="form-group">
                                    <label for={`recipient-categoria_id2-${produto}`} className="col-form-label">Categoria:</label>
                                    <input type="text" className="form-control" id={`recipient-categoria_id2-${produto}`} value={CategoriaProduto(dados.produto.categoria_id)} disabled></input>
                                </div>
                                <div className="form-group">
                                    <label for={`recipient-price2-${produto}`} className="col-form-label">Preço:</label>
                                    <input type="number" step='any' className="form-control" id={`recipient-price2-${produto}`} value={dados.produto.preco} disabled></input>
                                </div>
                                <div className="form-group">
                                    <label for={`message-text2-${produto}`} className="col-form-label">Descrição:</label>
                                    <textarea className="form-control" id={`message-text2-${produto}`} value={dados.produto.descricao} disabled></textarea>
                                </div>
                                <div className="form-group">
                                    <label for={`recipient-qnt_disponivel2-${produto}`} className="col-form-label">Quantidade disponivel:</label>
                                    <input type="number" className="form-control" id={`recipient-qnt_disponivel2-${produto}`} value={dados.produto.qnt_disponivel} disabled></input>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BtnVisualizar