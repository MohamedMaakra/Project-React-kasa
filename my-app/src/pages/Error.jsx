
import React from "react";
import Error from '../assets/404.png'
import '../Styles/Error.css'

export const PageError = ()=> {
    
    return (
        <div className="Error">
            <img src={Error} alt="Error" />
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href="/">Retourner sur la page d’accueil</a>
        </div>
    );

};

