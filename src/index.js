import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAlZXhZpnfYt9lol_dSYo0GcL6WYI9LsI",
    authDomain: "ecommerce-lozano-indiana.firebaseapp.com",
    projectId: "ecommerce-lozano-indiana",
    storageBucket: "ecommerce-lozano-indiana.appspot.com",
    messagingSenderId: "1000414290902",
    appId: "1:1000414290902:web:298a457f38ca2de48f3a77"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
