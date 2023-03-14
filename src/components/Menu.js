import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

export default function Menu(props) {
    const [isOpen, openIt] = useState(false);

    const openOrClose = () => {
        openIt(!isOpen);
    };

    const currentUser = props.currentUser;

    const handleSignOut = (event) => {
        signOut(getAuth())
    }

    return (
        <nav className='main-nav navbar'>
            <div className="dropdown">
                <ul>
                    <li><img src='./img/favicon.png' alt='A picture of the website logo.' /></li>

                    <li>
                        <button className='hamburger-menu' onClick={openOrClose} aria-label='menu'><i className='fa fa-bars' ></i></button>
                        {isOpen && (
                            <ul className='hamburger-menu-list'>
                                <li className='hamburger-menu-item'>
                                    <NavLink to='home' className='link'><span className='material-symbols-outlined'>cottage</span></NavLink>
                                </li>
                                <li className='hamburger-menu-item'>
                                    <NavLink to='about' className='link'>About</NavLink>
                                </li>
                                <li className='hamburger-menu-item'>
                                    <NavLink to='discussion' className='link'>Discussion</NavLink>
                                </li>
                                <li className='hamburger-menu-item'>
                                    <NavLink to='tweets' className='link'>Tweets</NavLink>
                                </li>
                                {currentUser.userId &&
                                    <>
                                        <li>
                                            <NavLink to="/profile" className="link">
                                                Profile
                                            </NavLink>
                                        </li>
                                        <li>
                                            <button className="btn btn-secondary ms-2" onClick={handleSignOut}>Sign Out</button>
                                        </li>
                                    </>
                                }
                                {!currentUser.userId &&
                                    <li>
                                        <NavLink className="link" to="/signin">
                                            Sign In
                                        </NavLink>
                                    </li>
                                }
                            </ul>
                        )}
                    </li>

                    <li><NavLink to='home' className='link'><span className='material-symbols-outlined'>cottage</span></NavLink></li>
                    <li><NavLink to='about' className='link'>About</NavLink></li>
                    <li><NavLink to='discussion' className='link'>Discussion</NavLink></li>
                    <li><NavLink to='tweets' className='link'>Tweets</NavLink></li>

                    {currentUser.userId &&
                        <>
                            <li>
                                <NavLink to="/profile" className="link">
                                    Profile
                                </NavLink>
                            </li>
                            <li>
                                <button className="btn btn-secondary ms-2" onClick={handleSignOut}>Sign Out</button>
                            </li>
                        </>
                    }
                    {!currentUser.userId &&
                        <li>
                            <NavLink className="link" to="/signin">
                                Sign In
                            </NavLink>
                        </li>
                    }

                </ul>
            </div>

            { }
        </nav>
    )
}