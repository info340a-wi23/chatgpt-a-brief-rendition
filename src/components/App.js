import React, { useState } from 'react';
import {Routes, Route, Navigate, Link} from 'react-router-dom';

import Menu from './Menu';
import Header from './Header'
import HomePage from './HomePage';
import About from './About';
import DiscussionPage from './DiscussionPage';
import Tweets from './Tweets';
import Footer from './Footer';
import CHAT_HISTORY from '../data/chat_log.json';

// OTHER IMPORTS HERE
import USERS from '../data/users.json';

export default function App(props) {
  //state
  const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);
  //initialize as null user
  const [currentUser, setCurrentUser] = useState({userId: null, userName: null, userImg: '/img/null.png'});

  const loginUser = (userObj) => {
    console.log("logging in as: ", userObj.userName);
    setCurrentUser(userObj);
  }

  //what content should my App look like?
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
                <Route path='/discussion' element={ <DiscussionPage currentUser={USERS[1]} /> }/>
                <Route path='/tweets' element={ <Tweets /> }/>
            </Routes>
            <Footer />
        </div>
    );
}