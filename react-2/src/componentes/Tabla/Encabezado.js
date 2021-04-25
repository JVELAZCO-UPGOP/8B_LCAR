import React from 'react';
import './Encabezado.css';

function Encabezado(props){
    if(props.columnas.length === 0) return false;
    return(
        <thead className="table-dark">
            <tr>
                <th>#</th>
                {props.columnas.map((columna, index) => (
                    <th key={`titulo-${index}`}>{columna}</th>
                ))}
                <th>Actions</th>
            </tr>
        </thead>
    );
}
export default Encabezado;