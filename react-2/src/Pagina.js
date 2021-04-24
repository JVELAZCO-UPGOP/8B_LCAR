import React from 'react';
import Nav from './componentes/Nav/index';
import ActionsMenu from './componentes/ActionsMenu/index';
import Tabla from './componentes/Tabla';
import Modal from './componentes/Modal';

function Pagina(){

    return(
        <>
        <Nav/>
        <div className="container">
            <ActionsMenu/>
            <Tabla />
        </div>
        <Modal/>
    </>    
    )
}

export default Pagina;