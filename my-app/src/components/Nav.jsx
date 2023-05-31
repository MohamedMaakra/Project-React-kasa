import React from 'react';
import {NavLink} from 'react-router-dom'
import LOGO from '../assets/LOGO.png';
import '../Styles/Header.css'

 const Nav = () =>{   
    return (
        <header className='header'>
          <nav className='header-nav'>
            <div>
              <img src={LOGO} alt='LOGO' />
            </div>
            <div className='Link'>
              <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} end='/' to='/'>Accueil</NavLink>
              <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} end='about' to='/about'>A propos</NavLink>
            </div>
          </nav>
        </header>
      );
    };

    export default Nav;