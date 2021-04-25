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

function Modal({cambiaModal = () => {}, manejarInput = () => {}, crearEntidad = () => {}, objeto = {} }){
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
                                    <Select 
                                        nombreCampo="tipo" 
                                        onChange={manejarInput} 
                                        options={tiposMascota} 
                                        placeholder = "Tipo animal" 
                                        value={objeto.tipo}
                                    />
                                </div>
                                <div className="mb-3">
                                    <Input 
                                        nombreCampo="nombre" 
                                        onInput={manejarInput} 
                                        tipo="text" 
                                        placeholder="nombre"
                                        value={objeto.nombre}
                                    />
                                </div>
                                <div className="mb-3">
                                    <Select 
                                        nombreCampo="dueno"
                                        onChange={manejarInput} 
                                        options = {duenos} 
                                        placeholder = "Dueño" 
                                        value={objeto.dueno}
                                    />
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <ModalFooter cambiaModal = {cambiaModal} crearEntidad={crearEntidad}/>
                </div>
            </div>
        </div>
        <div className="modal-backdrop fade show"></div>
        </>
    )
}

export default Modal;