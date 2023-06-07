import React from 'react';
import {NavLink} from 'react-router-dom'
import LOGO from '../assets/LOGO.png';
import D_LOGO from '../assets/D_LOGO.png';
import '../Styles/Header.css'

 const Nav = () =>{   
    return (
        <header className='header'>
          <nav className='header-nav'>
            <div>
              <img className='LOGO' src={LOGO} alt='LOGO' />
              <img className='LOGO-responsive' src={D_LOGO} alt="LOGO-responsive" />
            
            </div>
            <div className='Link'>
              <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} end='/' to='/'>Accueil</NavLink>
              <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} end='about' to='/about'>A Propos</NavLink>
            </div>
          </nav>
        </header>
      );
    };

    export default Nav;