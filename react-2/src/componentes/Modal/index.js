import React from 'react';
import ModalHeader from './ModalHeader'
import ModalFooter from './ModalFooter'
import './Modal.css'

function Modal({cambiaModal = () => {}, crearEntidad = () => {}, children = [] }){
    
    return (
        <>
        <div className="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <ModalHeader cambiaModal = {cambiaModal} />
                    <div className="modal-body">
                        <form id= "form">
                            <fieldset>
                                {children}
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