import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Pagina from './Pagina';
import Nav from './componentes/Nav/index';

function App() {
  return(
    <div className="container">
      <Nav />
      <Switch>
        <Route exact path="/" component={() => (<Pagina titulo="Mascotas" entidad="mascotas" />) } />
        <Route path="/veterinarias" component={() => (<Pagina titulo="Veterinarias" entidad="veterinarias" />) } />
        <Route path="/duenos" component={() => (<Pagina titulo="Dueños" entidad="duenos" />) } />
        <Route path="/consultas" component={() => (<Pagina titulo="Consultas" entidad="consultas" />) } />
      </Switch>
    </div>
  );
}

export default App;