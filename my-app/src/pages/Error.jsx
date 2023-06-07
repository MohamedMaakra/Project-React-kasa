
import React from "react";
import Error from '../assets/404.png'
import D_Error from '../assets/D_404.png'
import '../Styles/Error.css'

export const PageError = ()=> {
    
    return (
        <div className="Error">
            <img  className="Errorr" src={Error} alt="Error" />
            <img  className="Error-responsive" src={D_Error} alt="Error-responsive " />
            <p>Oups! La page <span>que </span> vous demandez n'existe pas.</p>
            <a href="/">Retourner sur la page d’accueil</a>
        </div>
    );

};

