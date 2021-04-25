import React from 'react';
import Search from '../Search/index';
import './nav.css';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" >Veterinaria</a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="index.html">Mascotas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="veterinarias.html">Veterinarias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="consultas.html">Consultas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="duenos.html">Dueños</a>
                        </li>
                    </ul>
                    <Search/>
                </div>
            </div>
        </nav>
    )
}

export default Nav;