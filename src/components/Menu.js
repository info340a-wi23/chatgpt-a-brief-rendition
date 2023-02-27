import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Menu(props) {
    const [isOpen, openIt] = useState(false);

    const openOrClose = () => {
        openIt(!isOpen);
    };

    return (
        <nav className='main-nav navbar'>
            <div className="dropdown">
                <ul>
                    <li><img src='./img/favicon.png' alt='A picture of the website logo.'/></li>

                    <li>
                        <button className='hamburger-menu' onClick={openOrClose}><i className='fa fa-bars' aria-label='menu'></i></button> 
                        {isOpen && (
                            <ul className='hamburger-menu-list'>
                                <li className='hamburger-menu-item'>
                                    <NavLink to='home'><span className='material-symbols-outlined'>cottage</span></NavLink>
                                </li>
                                <li className='hamburger-menu-item'>
                                    <NavLink to='about'>About</NavLink>                           
                                </li>
                                <li className='hamburger-menu-item'>
                                    <NavLink to='discussion'>Discussion</NavLink>
                                </li>
                                <li className='hamburger-menu-item'>
                                    <NavLink to='tweets'>Tweets</NavLink>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li><NavLink to='home'><span className='material-symbols-outlined'>cottage</span></NavLink></li>
                    <li><NavLink to='about'>About</NavLink></li>
                    <li><NavLink to='discussion'>Discussion</NavLink></li>
                    <li><NavLink to='tweets'>Tweets</NavLink></li>

                </ul>
            </div>

            {/* <div className='dropdown'>
                <button type='button' className='navbar-toggler' data-toggle='dropdown'><i className="fa fa-bars" aria-label="menu"></i></button>
                <div className='dropdown-menu'>
                    <NavLink to='home' className='dropdown-item'><span className="material-symbols-outlined active">cottage</span></NavLink>
                    <NavLink to='about' className='dropdown-item'>About</NavLink>
                    <NavLink to='discussion' className='dropdown-item'>Discussion</NavLink>
                    <NavLink to='tweets' className='dropdown-item'>Tweets</NavLink>
                </div>
                <img className ='site-logo' src="./img/favicon.png" alt="A picture of the website logo."/>
            </div> */}
        </nav>
    )
}