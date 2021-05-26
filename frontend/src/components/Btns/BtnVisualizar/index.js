import './style.css'

const BtnVisualizar = ({...props}) => {
    const { id, nome, categoria_id, preco, descricao, qnt_disponivel } = props;
    return (
        <>
            <button id='btnVisualizarText' type="button" className="btn btn-primary" data-toggle="modal" data-target={`#modalVisualizar${id}`} data-whatever="@getbootstrap">
                Visualizar
            </button>
            <button id='btnVisualizarIcon' type="button" className="btn btn-primary" data-toggle="modal" data-target={`#modalVisualizar${id}`} data-whatever="@getbootstrap">
                <i className="fa fa-eye"></i>
            </button>

            <div className="modal fade" id={`modalVisualizar${id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <label for={`recipient-name2-${id}`} className="col-form-label">Nome:</label>
                                    <input type="text" className="form-control" id={`recipient-name2-${id}`} value={nome} disabled></input>
                                </div>
                                <div className="form-group">
                                    <label for={`recipient-categoria_id2-${id}`} className="col-form-label">Categoria:</label>
                                    <input type="text" className="form-control" id={`recipient-categoria_id2-${id}`} value={categoria_id} disabled></input>
                                </div>
                                <div className="form-group">
                                    <label for={`recipient-price2-${id}`} className="col-form-label">Preço:</label>
                                    <input type="number" step='any' className="form-control" id={`recipient-price2-${id}`} value={preco} disabled></input>
                                </div>
                                <div className="form-group">
                                    <label for={`message-text2-${id}`} className="col-form-label">Descrição:</label>
                                    <textarea className="form-control" id={`message-text2-${id}`} value={descricao} disabled></textarea>
                                </div>
                                <div className="form-group">
                                    <label for={`recipient-qnt_disponivel2-${id}`} className="col-form-label">Quantidade disponivel:</label>
                                    <input type="text" className="form-control" id={`recipient-qnt_disponivel2-${id}`} value={qnt_disponivel} disabled></input>
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