import React, { Component } from 'react';
import Nav from './componentes/Nav/index';
import ActionsMenu from './componentes/ActionsMenu/index';
import Tabla from './componentes/Tabla/index';
import Modal from './componentes/Modal/index';
import { listarEntidad, crearEditarEntidad, eliminarEntidad } from './servicio'

class Pagina extends Component {
    constructor (props) {
        super(props);
        this.state= {
            mostrarModal:false,
            entidades: [],
            objeto: {},
            idObjeto: null,
            method:'POST'
        }; 
    }

    cambiaModal = (_evento, method = "POST") => {
        this.setState({ mostrarModal: !this.state.mostrarModal, method })
    }

    listar = async () => {
        const {entidad} = this.props;
        const entidades = await listarEntidad({entidad});
        this.setState({entidades})
    }

    manejarInput = (evento) => {
        const { 
            target: { value, name }, 
        } = evento;
        let { objeto } = this.state;
        objeto = { ...objeto, [name]: value };
        this.setState({ objeto });
    };
    crearEntidad = async () => {
        const { entidad } = this.props;
        let { objeto, method, idObjeto } = this.state;
        // const method = "POST";
        await crearEditarEntidad({ entidad, objeto, method, idObjeto });
        this.cambiaModal();
        this.listar();
    };
    editarEntidad = async (_evento, index) => {
        const objeto = { ...this.state.entidades[index] };
        this.setState({ objeto, idObjeto: index }, ()=>{
            this.cambiaModal(null, "PUT");
        });
/* 
, async() => {
const { entidad } = this.props;
let { objeto } = this.state;
const method = "POST";
await crearEditarEntidad({ entidad, objeto, method });
this.cambiaModal();
this.listar();
}) */
    };
    
    eliminarEntidad = async (_evento, index) => {
        const { entidad } = this.props;
        const respuesta = await eliminarEntidad({entidad, idObjeto: index});
        console.log(respuesta);
        this.listar();
    }

    componentDidMount() {
        this.listar();
    }

    render(){
        const { titulo = 'Pagina sin titulo' } = this.props;
        return(
            <>
            <Nav/>
            <div className="container">
                <ActionsMenu cambiaModal = {this.cambiaModal} titulo = {titulo}/>
                <Tabla 
                    entidades = {this.state.entidades} 
                    editarEntidad={this.editarEntidad}
                    eliminarEntidad = {this.eliminarEntidad}
                />
            </div>
            {this.state.mostrarModal && 
                <Modal 
                    cambiaModal = {this.cambiaModal} 
                    manejarInput = {this.manejarInput} 
                    crearEntidad={this.crearEntidad}
                    objeto={this.state.objeto}
                />}
        </>    
        )
    };
}

export default Pagina;