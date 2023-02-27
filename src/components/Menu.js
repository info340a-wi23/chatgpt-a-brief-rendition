import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu(props) {
    const [isOpen, openIt] = useState(false);

    const openOrClose = () => {
        openIt(!isOpen);
    };

    return (
        <nav className='main-nav navbar'>
            <div className='dropdown'>
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
        </nav>
    )
}