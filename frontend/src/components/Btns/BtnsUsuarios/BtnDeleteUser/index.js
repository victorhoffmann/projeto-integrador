import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const BtnDeleteUser = ({ usuario }) => {
    const { id, nome } = usuario
    const history = useHistory();


    const handleDelete = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.delete(`/usuarios/${usuario.id}`);
            history.go(0);
        } catch (error) {
            console.log(error);
            // history.go(0);
        }
    }

    return (
        <>
            <button id='btnExcluirText' type="button" class="btn btn-danger" data-toggle="modal" data-target={`#modalDeleteUser-${id}`}>
                Excluir
            </button>
            <button id='btnExcluirIcon' type="button" class="btn btn-danger" data-toggle="modal" data-target={`#modalDeleteUser-${id}`}>
                <i class="fa fa-trash"></i>
            </button>
            <div class="modal fade" id={`modalDeleteUser-${id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Excluir usuario</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Tem certeza que deseja excluir {nome} ?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <form onSubmit={handleDelete}>
                                <button type="submit" class="btn btn-danger">Excluir</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BtnDeleteUser