import React from "react";
// import Alert from "../Alert/index";
import './Actionsmenu.css';

function ActionsMenu({ cambiaModal = () => {}, titulo }) {
  return (
    <div className="actions-menu">
      <h1>{titulo}</h1>
      <div className="actions-menu-content">
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={cambiaModal}>Nueva</button>
      </div>
    </div>
  );
}

export default ActionsMenu;
