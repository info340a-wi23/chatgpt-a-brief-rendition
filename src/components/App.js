import React, { useEffect, useState } from 'react';
import {Routes, Route, Navigate, Outlet, useNavigate} from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import Menu from './Menu';
import Header from './Header'
import HomePage from './HomePage';
import About from './About';
import DiscussionPage from './DiscussionPage';
import Tweets from './Tweets';
import Footer from './Footer';
import SignInPage from './SignInPage';
import ProfilePage from './ProfilePage'
import ErrorPage from './ErrorPage';

// OTHER IMPORTS HERE
import USERS from '../data/users.json';
import CHAT_HISTORY from '../data/chat_log.json';

export default function App(props) {
  //state
  const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);
  //initialize as null user
  const [currentUser, setCurrentUser] = useState(USERS[0]);

  const navigateTo = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (firebaseUser) => {
      if(firebaseUser) {
        console.log("Signing in as", firebaseUser.displayName)
        console.log(firebaseUser);
        firebaseUser.userId = firebaseUser.uid;
        firebaseUser.userName = firebaseUser.displayName;
        firebaseUser.userImg = firebaseUser.photoURL || "/img/null.png";
        setCurrentUser(firebaseUser);
      }
      else {
        console.log("signed out");
        setCurrentUser(USERS[0]);
      }
  })

}, [])
  
  const loginUser = (userObj) => {
    console.log("logging in as: ", userObj.userName);
    setCurrentUser(userObj);

    if(userObj.userId !== null){
      navigateTo('/discussion');
    }
  }

  //what content should my App look like?
    return(
        <div className='ChatGPTaBriefRendition'>
            <Menu currentUser={currentUser}/>
            <Header />
            <Routes>
                {/* Automatically sends to home page */}
                <Route path='' element={<Navigate to='/home' /> } /> 
                <Route path='/home' element={ <HomePage /> } />
                <Route path='/about' element={ <About /> } />
                <Route path='/tweets' element={ <Tweets /> }/>
                <Route path='/signin' element={ <SignInPage currentUser={currentUser} loginCallback={loginUser}/>} />

                {/* Protected */}
                <Route element={<ProtectedPage currentUser={currentUser} />}>
                  <Route path='/discussion' element={ <DiscussionPage currentUser={currentUser} /> }/>
                  <Route path="/profile" element={<ProfilePage currentUser={currentUser} />}/>
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}

function ProtectedPage(props) {
  if(props.currentUser.userId === null) { 
    return <Navigate to='/signin' />
  }
  else { 
    return <Outlet />
  }
}