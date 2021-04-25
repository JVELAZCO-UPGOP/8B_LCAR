import React, { Component } from 'react';
import Nav from './componentes/Nav/index';
import ActionsMenu from './componentes/ActionsMenu/index';
import Tabla from './componentes/Tabla/index';
import Modal from './componentes/Modal/index';

class Pagina extends Component {
    constructor (props) {
        super(props);
        this.state= {
            mostrarModal:false,
        }; 
    }

    cambiaModal= () => {
        this.setState({ mostrarModal: !this.state.mostrarModal })
    }

    render(){
        return(
            <>
            <Nav/>
            <div className="container">
                <ActionsMenu cambiaModal = {this.cambiaModal} />
                <Tabla />
            </div>
            {this.state.mostrarModal && <Modal cambiaModal = {this.cambiaModal}/>}
        </>    
        )
    };
}

export default Pagina;