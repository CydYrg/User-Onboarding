import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import './Form.js';

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
     <h2>Sign Up</h2> 
     <Form
     
     />
    </div>
  );
}

export default App;
