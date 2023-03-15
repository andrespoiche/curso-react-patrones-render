import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css'

function ChangeAlert({ sincronize }){

    const {show, toggleShow} = useStorageListener(sincronize);

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


export { ChangeAlert }
