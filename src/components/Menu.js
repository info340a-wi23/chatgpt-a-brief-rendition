import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Menu(props) {
    // Hamburger Menu add in
    return (
        <nav className='main-nav navbar'>
            {/* <div className="dropdown">
                <ul>
                    <li><img src="./img/favicon.png" alt="A picture of the website logo."/></li>
                    <li><div id="hamburger-menu"><a href="#"><i className="fa fa-bars" aria-label="menu"></i></a></div></li>
                    <li><NavLink to='home'><span className="material-symbols-outlined">cottage</span></NavLink></li>
                    <li><NavLink to='about'>About</NavLink></li>
                    <li><NavLink to='discussion'>Discussion</NavLink></li>
                    <li><NavLink to='tweets'>Tweets</NavLink></li>

                </ul>
            </div> */}

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

            <Navbar className='navigation' sticky='top' expand='lg'>
                <Container fluid>
                    <NavDropdown className='me-auto fa fa-bars navbar-toggler'>
                        <NavDropdown.Item as = {NavLink} to='home'>Home</NavDropdown.Item>
                        <NavDropdown.Item as = {NavLink} to = 'about'>About</NavDropdown.Item>
                        <NavDropdown.Item as = {NavLink} to = 'discussion'>Discussion</NavDropdown.Item>
                        <NavDropdown.Item as = {NavLink} to = 'tweets'>Tweets</NavDropdown.Item>
                    </NavDropdown>
                    <Navbar.Brand>
                        <img className ='site-logo' src="./img/favicon.png" alt="A picture of the website logo."/>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </nav>
    )
}