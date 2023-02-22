import React, { useState } from 'react';
import {Routes, Route, Navigate, Link} from 'react-router-dom';

import Menu from './Menu';
import Header from './Header'
import HomePage from './HomePage';
import About from './About';
import Discussion from './Discussion';
import Tweets from './Tweets';
import Footer from './Footer';

// OTHER IMPORTS HERE

export default function App(props) {
    // TODO: React routing
    return(
        // Old code without routing and menu
        // <div>
        //     <Menu />
        //     <Header />
        //     <main>
        //         <HomePage />
        //         {/* <About /> */}
        //         {/* <Discussion /> */}
        //         {/* <Tweets /> */}
        //     </main>

        //     <Footer />
        // </div>
        <div className='ChatGPTaBriefRendition'>
            <Menu />
            <Header />
            <Routes>
                {/* Automatically sends to home page */}
                <Route path='' element={<Navigate to='/home' /> } /> 
                <Route path='/home' element={ <HomePage /> } />
                <Route path='/about' element={ <About /> } />
                <Route path='discussion' element={ <Discussion /> }/>
                <Route path='tweets' element={ <Tweets /> }/>
            </Routes>
            <Footer />
        </div>
    );
}