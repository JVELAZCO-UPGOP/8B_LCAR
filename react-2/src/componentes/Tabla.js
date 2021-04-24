import React from 'react';

function Tabla(){
    return (
        <table className="table">
            <thead className="table-dark">
                <th>#</th>
                <th>Tipo</th>
                <th>Nombre</th>
                <th>Dueño</th>
                <th>Actions</th>
            </thead>
            <tbody id="lista-mascotas"></tbody>
        </table>
    )
}

export default Tabla;