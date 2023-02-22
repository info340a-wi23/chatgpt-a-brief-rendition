import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu(props) {
    // Hamburger Menu
    // Fix href
    // Icon
    return (
        <nav>
            <ul className="inline-menu">
                <li><img src={require("./img/favicon.png")} alt="A picture of the website logo."/></li>
                <li><Link to='home'><span className="material-symbols-outlined">cottage</span></Link></li>
                <li><Link to='about'>About</Link></li>
                <li><Link to='discussion'>Discussion</Link></li>
                <li><Link to='tweets'>Tweets</Link></li>
            </ul>
        </nav>
    )
}