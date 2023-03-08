import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6b_eRytm05CFQ8ISFhdOGqe1DdaFeXCo",
  authDomain: "chatgpt-a-brief-rendition.firebaseapp.com",
  databaseURL: "https://chatgpt-a-brief-rendition-default-rtdb.firebaseio.com",
  projectId: "chatgpt-a-brief-rendition",
  storageBucket: "chatgpt-a-brief-rendition.appspot.com",
  messagingSenderId: "1033318203301",
  appId: "1:1033318203301:web:c6b335e82eeabbc3f1724c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);