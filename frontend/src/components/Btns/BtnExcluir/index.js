const BtnExcluir = ({...props}) => {
    const { id, title } = props;

    return (
        <>
            <button id='btnExcluirText' type="button" class="btn btn-danger" data-toggle="modal" data-target={`#modalExcluir${id}`}>
                Excluir
            </button>
            <button id='btnExcluirIcon' type="button" class="btn btn-danger" data-toggle="modal" data-target={`#modalExcluir${id}`}>
                <i class="fa fa-trash"></i>
            </button>
            <div class="modal fade" id={`modalExcluir${id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Excluir produto</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Tem certeza que deseja excluir {title} ?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-danger">Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BtnExcluir