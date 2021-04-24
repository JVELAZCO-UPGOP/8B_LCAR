import React from 'react';
import './alert.css';

function Alert(props){
    return (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Opps!</strong> Algo hicimos mal, vuelve a intentarlo.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={props.alertSwitch}></button>
        </div>
    );
}

export default Alert;