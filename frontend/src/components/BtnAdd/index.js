const BtnAdd = () => {
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
                                    <input type="text" class="form-control" id="recipient-name" ></input>
                                </div>
                                <div class="form-group">
                                    <label for="recipient-price" class="col-form-label">Preço:</label>
                                    <input type="number" step='any' class="form-control" id="recipient-price"></input>
                                </div>
                                <div class="form-group">
                                    <label for="message-text" class="col-form-label">Descrição:</label>
                                    <textarea class="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Adicionar produto</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BtnAdd