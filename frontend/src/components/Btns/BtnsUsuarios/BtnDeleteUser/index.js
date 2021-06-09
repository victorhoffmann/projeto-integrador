import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const BtnDeleteUser = ({ usuario }) => {
    const { id, nome } = usuario
    const history = useHistory();


    const handleDelete = async (e) => {
        e.preventDefault()
        try {
            await axios.delete(`/usuarios/${usuario.id}`);
            history.go(0);
        } catch (error) {
            console.log(error);
            // history.go(0);
        }
    }

    return (
        <>
            <button id='btnExcluirText' type="button" className="btn btn-danger" data-toggle="modal" data-target={`#modalDeleteUser-${id}`}>
                Excluir
            </button>
            <button id='btnExcluirIcon' type="button" className="btn btn-danger" data-toggle="modal" data-target={`#modalDeleteUser-${id}`}>
                <i className="fa fa-trash"></i>
            </button>
            <div className="modal fade" id={`modalDeleteUser-${id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Excluir usuario</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Tem certeza que deseja excluir {nome} ?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <form onSubmit={handleDelete}>
                                <button type="submit" className="btn btn-danger">Excluir</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BtnDeleteUser