const BtnVisualizar = ({...props}) => {
    const { title, description, price } = props;
    return (
        <>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalVisualizar" data-whatever="@getbootstrap">
                Visualizar
            </button>

            <div class="modal fade" id="modalVisualizar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <label for="recipient-name2" class="col-form-label">Nome:</label>
                                    <input type="text" class="form-control" id="recipient-name2" value={title} disabled></input>
                                </div>
                                <div class="form-group">
                                    <label for="recipient-price" class="col-form-label">Preço:</label>
                                    <input type="number" step='any' class="form-control" id="recipient-price" value={price} disabled></input>
                                </div>
                                <div class="form-group">
                                    <label for="message-text" class="col-form-label">Descrição:</label>
                                    <textarea class="form-control" id="message-text" value={description} disabled></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BtnVisualizar