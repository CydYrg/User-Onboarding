import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import './Form.js';

function App() {
  import axios from 'axios'
import * as yup from 'yup'
//import schema from '../validation/formSchema'

 const initialFormValues = {
   // text inputs //
   username: '',
   email:'',
   password:'',

   // dropdown //

   //checkbox //
   termsAndServices: false, 
 }
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
}
const initialUsers = []
const initialDisabled = true

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h2>Sign Up</h2>
    </div>
  );
}

export default App;
