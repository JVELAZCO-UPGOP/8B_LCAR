import React from 'react';
import { Link } from "react-router-dom";
import Search from '../Search/index';
import './nav.css';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Veterinaria
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Mascotas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/veterinarias">Veterinarias</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/consultas">Consultas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/duenos">Dueños</a>
                        </li>
                    </ul>
                    <Search/>
                </div>
            </div>
        </nav>
    )
}

export default Nav;