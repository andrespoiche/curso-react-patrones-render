import React from "react";
import { withStorageListener } from "./withStorageListener";
import './ChangeAlert.css'

function ChangeAlert( {show, toggleShow}){
    if (show){
        return(
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                <p>Parece que cambiastes tus TODOS en otra pestaña</p>
                <p>¿Quieres sinconizar tus TODOS?</p>
                <button
                className="TodoForm-button TodoForm-button--add"
                onClick={toggleShow}>
                Si!
                </button>
                </div>
            </div>
        );
    }
    else{
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener (ChangeAlert)

export { ChangeAlertWithStorageListener }
