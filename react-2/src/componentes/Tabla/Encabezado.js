import React from 'react';
import './Encabezado.css';

function Encabezado(props){
    if(props.columnas.length === 0) return false;
    return(
        <thead className="table-dark">
            <th>#</th>
            {props.columnas.map((columna) => (
                <th>{columna}</th>
            ))}
            <th>Actions</th>
        </thead>
    );
}
export default Encabezado;