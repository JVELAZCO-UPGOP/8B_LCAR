import React from 'react';

function Modal(){
    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Nueva mascota</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form id= "form">
                            <input type="hidden" id="indice" />
                            <fieldset>
                                <div className="mb-3">
                                    <select id="tipo" className="form-select" placeholder='Tipo de animal'>
                                        <option selected>Seleccionar...</option>
                                        <option>Perro</option>
                                        <option>Gato</option>
                                        <option>Pajaro</option>
                                        <option>Pez</option>
                                        <option>Otro</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <input type="text" id="nombre" className="form-control" placeholder="Nombre" />
                                </div>
                                <div className="mb-3">
                                    <select id="dueno" className="form-select" placeholder='Dueño'>
                                        <option selected>Seleccionar...</option>
                                        <option>Esteban</option>
                                        <option>Julian</option>
                                        <option>Jhon</option>
                                        <option>Felix</option>
                                        <option>Laura</option>
                                    </select>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="cerrar">Cerrar</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="btn-guardar">Crear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;