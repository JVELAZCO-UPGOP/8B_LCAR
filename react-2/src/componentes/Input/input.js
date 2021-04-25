import React from 'react'
import './Input.css'

function Input ({ tipo = "text", nombreCampo, onInput = () => {}, placeholder, value="" }) {
    return(
        <input type={tipo} name={nombreCampo} onInput={onInput} className="form-control" placeholder={placeholder} defaultValue={value} />
    );
}

export default Input;