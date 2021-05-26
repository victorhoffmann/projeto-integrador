import './style.css'

const BtnModificar = ({...props}) => {
    const { id, nome, categoria_id, preco, descricao, qnt_disponivel } = props;
    return (
        <>
            <button id='btnModificarText' type="button" class="btn btn-success" data-toggle="modal" data-target={`#modalModificar${id}`} data-whatever="@getbootstrap">
                Modificar
            </button>
            <button id='btnModificarIcon' type="button" class="btn btn-success" data-toggle="modal" data-target={`#modalModificar${id}`} data-whatever="@getbootstrap">
                <i class="fa fa-retweet"></i>
            </button>

            <div class="modal fade" id={`modalModificar${id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <label for={`recipient-name-${id}`} class="col-form-label">Nome:</label>
                                    <input type="text" class="form-control" id={`recipient-name-${id}`} defaultValue={nome}></input>
                                </div>
                                <div class="form-group">
                                    <label for={`recipient-categoria_id-${id}`} class="col-form-label">Categoria:</label>
                                    <input type="text" class="form-control" id={`recipient-categoria_id-${id}`} defaultValue={categoria_id}></input>
                                </div>
                                <div class="form-group">
                                    <label for={`recipient-price-${id}`} class="col-form-label">Preço:</label>
                                    <input type="number" step='any' class="form-control" id={`recipient-price-${id}`} defaultValue={preco}></input>
                                </div>
                                <div class="form-group">
                                    <label for={`message-text-${id}`} class="col-form-label">Descrição:</label>
                                    <textarea class="form-control" id={`message-text-${id}`} defaultValue={descricao}></textarea>
                                </div>
                                <div class="form-group">
                                    <label for={`recipient-qnt_disponivel-${id}`} class="col-form-label">Quantidade disponivel:</label>
                                    <input type="text" class="form-control" id={`recipient-qnt_disponivel-${id}`} defaultValue={qnt_disponivel}></input>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Aplicar alterações</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BtnModificar