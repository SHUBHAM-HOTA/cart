import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";

// import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB65qNcFw21QWpQkiCDFgGRyByoc8tO4fc",
    authDomain: "cart-7db9d.firebaseapp.com",
    projectId: "cart-7db9d",
    storageBucket: "cart-7db9d.appspot.com",
    messagingSenderId: "750465502141",
    appId: "1:750465502141:web:7db1349134d9d0a3ab20d4"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));


