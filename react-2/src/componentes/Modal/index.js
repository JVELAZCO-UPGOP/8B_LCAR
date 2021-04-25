import React from 'react';
import ModalHeader from './ModalHeader'
import ModalFooter from './ModalFooter'
import Select from '../Select/index'
import Input from '../Input/input'
import './Modal.css'

const tiposMascota = [
    { valor: 'Perro', etiqueta: 'Perro'},
    { valor: 'Gato', etiqueta: 'Gato'},
    { valor: 'Pajaro', etiqueta: 'Pajaro'},
    { valor: 'Otro', etiqueta: 'Otro'},
];
const duenos = [
    { valor: 'Esteban', etiqueta: 'Esteban'},
    { valor: 'Julian', etiqueta: 'Julian'},
    { valor: 'Jhon', etiqueta: 'Jhon'},
    { valor: 'Felix', etiqueta: 'Felix'},
    { valor: 'Laura', etiqueta: 'Laura'},
];

function Modal({cambiaModal = () => {} }){
    return (
        <>
        <div className="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <ModalHeader cambiaModal = {cambiaModal} />
                    <div className="modal-body">
                        <form id= "form">
                            <input type="hidden" id="indice" />
                            <fieldset>
                                <div className="mb-3">
                                    <Select options={tiposMascota} nombreCampo = "tipo animal" />
                                </div>
                                <div className="mb-3">
                                    <Input tipo="text" nombreCampo="nombre"/>
                                </div>
                                <div className="mb-3">
                                    <Select options = {duenos} nombreCampo = "dueño" />
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <ModalFooter cambiaModal = {cambiaModal} />
                </div>
            </div>
        </div>
        <div className="modal-backdrop fade show"></div>
        </>
    )
}

export default Modal;