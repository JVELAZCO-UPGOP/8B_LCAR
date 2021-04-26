import React, { useSatate, useEffect } from 'react';
import Input from '../Input/input';
import Select from '../Select/index';

function ComponenteCampo ({ manejarInput = () => {}, objeto = {}, nombreCampo = "", options={}, }) {
    switch (nombreCampo) {
        case 'tipo':
        case 'mascota':
        case 'veterinaria':
        case 'diagnostico':
        case 'dueno':
            return (
                <div className="mb-3">
                    {options[nombreCampo].length > 0 ? (<Select 
                        nombreCampo={nombreCampo}
                        options={options[nombreCampo]}
                        onChange={manejarInput}
                        placeholder={nombreCampo}
                        defaultValue={objeto[nombreCampo]}
                        selectedValue={objeto[nombreCampo]}
                        value={objeto[nombreCampo]}
                    />) : ( "cargando opciones..." )}
                </div>
            );
        case 'nombre':
        case 'apellido':
        case 'documento':
        case 'historia':
            return ( 
                <div className="mb-3">
                    <Input 
                        nombreCampo={nombreCampo}
                        tipo="text" 
                        onInput={manejarInput} 
                        placeholder={nombreCampo}
                        value={objeto[nombreCampo]}
                    />
                </div>
            );
        default:
            return false;
    }
}

export default ComponenteCampo;