import React from "react";
import Footer from '../assets/Footer.png';
import Footer_resp from '../assets/D_Footer.png';
import '../Styles/Footer.css'


 const Footere = () => {  
    return (
        <footer className="footer">
            <img className="Footer-banniere" src={Footer} alt="foot"></img>
            <img  className="Footer-responsive" src={Footer_resp} alt="Footer-responsive " />
        </footer>
    ) ;
}
export default Footere;