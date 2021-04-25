import React from 'react'
import './ModalHeader.css'

function ModalHeader({cambiaModal = () => {} }){
    return (
        <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Nueva mascota</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={cambiaModal}></button>
        </div>
    )
}

export default ModalHeader;