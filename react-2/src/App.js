import React from 'react';
import { Switch, Route } from "react-router-dom";
import Nav from './componentes/Nav/index';
import './App.css';
import Pagina from './Pagina';

function App() {
  return(
    <div className="container">
      <Nav />
      <Switch>
        <Route exact path="/" component={(props) => (
            <Pagina {...props} titulo="Mascotas" entidad="mascotas" />
          ) } 
        />
        <Route path="/veterinarias" component={(props) => (
            <Pagina {...props} titulo="Veterinarias" entidad="veterinarias" />
          ) } 
        />
        <Route path="/duenos" component={(props) => (
            <Pagina {...props} titulo="Dueños" entidad="duenos" />
          ) } 
        />
        <Route path="/consultas" component={(props) => (
            <Pagina {...props} titulo="Consultas" entidad="consultas" />
          ) } 
        />
      </Switch>
    </div>
  );
}

export default App;