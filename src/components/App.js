import React, { useState } from 'react';
import {Routes, Route, Navigate, Link} from 'react-router-dom';

import Menu from './Menu';
import Header from './Header'
import HomePage from './HomePage';
import About from './About';
import Discussion from './Discussion';
import Tweets from './Tweets';
import Footer from './Footer';
import { HeaderBar } from './HeaderBar.js';
import { ChannelList } from './ChannelNav.js';
import { ChatPane } from './ChatPane.js';
import { ComposeForm } from './ComposeForm';
import CHAT_HISTORY from '../data/chat_log.json';

// OTHER IMPORTS HERE

export default function App(props) {
    // TODO: React routing
    //state
  const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);
  const [currentUser, setCurrentUser] = 
      useState({userId: null, userName: null, userImg: '/img/null.png'});
  //initialize as null user

  const channelList = [
    'general', 'random', 'dank-memes', 'channel-4', 'pet-pictures'
  ]
  const currentChannel = "general";

  const addMessage = ( messageText) => {
    const userObj = currentUser;
    const newMessage = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": messageText,
      "timestamp": Date.now(),
      "channel": currentChannel
    } 

    const updateChatMessages = [...chatMessages, newMessage];
    setChatMessages(updateChatMessages); //update state and re-render
  }

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
                <Route path='/discussion' element={ <Discussion /> }/>
                <Route path='/tweets' element={ <Tweets /> }/>
            </Routes>
            <Footer />
        </div>
    );
}