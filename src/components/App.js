import React, { useState } from 'react';

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
        <div>
            <Menu />
            <Header />
            <main>
                <HomePage />
                {/* <About /> */}
                {/* <Discussion /> */}
                {/* <Tweets /> */}
            </main>

            <Footer />
        </div>
    );
}