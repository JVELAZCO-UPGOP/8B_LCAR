import React from 'react';
import BotonAccion from '../BotonAccion/index';

function Fila({ mascota, index}){
    return(
        <tr>
            <td>{index}</td>
            <td>{mascota.tipo}</td>
            <td>{mascota.nombre}</td>
            <td>{mascota.dueno}</td>
            <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <BotonAccion tipo="editar"/>
                    <BotonAccion tipo="eliminar"/>
                </div>
            </td>
        </tr>
    );
}
export default Fila;